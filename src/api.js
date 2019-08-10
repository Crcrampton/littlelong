import io from 'socket.io-client';

var socket;

// Heroku Check?

// Uncomment this for deploys.
socket = io();

// Uncomment this for local dev.
// socket = io("http://localhost:3001");

function createRoom(playerName) {
    socket.emit('createRoom', playerName);
}

function joinRoom(playerName, roomCode) {
    socket.emit('joinRoom', { playerName : playerName, roomId : roomCode });
}

function roomSubscriber(callback) {
    socket.on('roomChange', (room) => callback(room, socket.id));
}

function socketId() {
    return socket.id;
}

export { createRoom, joinRoom, roomSubscriber, socketId }