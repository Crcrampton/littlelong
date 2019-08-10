const express = require('express');
const socketIO = require('socket.io');
const secure = require('force-ssl-heroku');
const path = require('path');

var PORT;

// Heroku Check?

// Uncomment this for deploys.
PORT = process.env.PORT || 3000;

// Uncomment this for local dev.
// PORT = 3001;

const server = express()
    .use(express.static(path.join(__dirname, '../../build')))
    .use(secure)
    .listen(PORT, () => console.log(`Listening on ${ PORT }`));

const io = socketIO(server);

let room = require('./room');

let rooms = {};

io.on('connection', (socket) => {
    console.log("New connection.");
    socket.on('createRoom', (playerName) => {
        let theRoom = createRoom(socket);

        socket.join(theRoom.id);

        socket.player = room.createPlayer(socket, playerName, true, 'red');
        room.addPlayer(theRoom, socket.player);

        rooms[theRoom.id] = socket.room = theRoom;

        refreshRoom(theRoom.id);
    });

    socket.on('refreshRoom', () => {
        refreshRoom(socket.room.id);
    });

    socket.on('joinRoom', (data) => {
        const { playerName, roomId } = data;
        const playerColors = ['red', 'blue', 'green', 'yellow'];

        if (io.sockets.adapter.rooms.hasOwnProperty(roomId)) {
            socket.join(roomId);
            console.log(rooms[roomId]);
            socket.player = room.createPlayer(socket, playerName, false, playerColors[rooms[roomId].playerCount]);
            rooms[roomId] = room.addPlayer(rooms[roomId], socket.player);
            socket.room = rooms[roomId];

            refreshRoom(roomId);
        }
    });

    socket.on('leaveRoom', () => {
        delete rooms[socket.room.id].players[socket.id];
        rooms[socket.room.id].playerCount--;
        socket.leave(socket.room.id);
        refreshRoom(socket.room.id);

        socket.room = { id : 0 };
    });
});

function createRoom(socket) {
    let roomId = room.genRoomId();
    if (!io.sockets.adapter.rooms.hasOwnProperty(roomId)) {
        return {
            title : roomId,
            id : roomId,
            stage : 'landing',
            players : {},
            playerCount : 0,
        };
    } else {
        return createRoom(socket);
    }
}

function refreshRoom(roomId) {
    io.to(roomId).emit('roomChange', {
        room : rooms[roomId],
    });
}