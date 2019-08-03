let Sentencer = require('sentencer');

module.exports = {
    genRoomId : ()  => {
        return Sentencer.make("{{adjective}} COCK").toUpperCase();
    },
    addPlayer : (room, player) => {
        if (room && player) {
            room.players[player.id] = player;
            room.playerCount++;
            return room;
        }
    },
    createPlayer : (socket, name, isLeader, color) => {
        return {
            id : socket.id,
            name : name,
            isLeader : isLeader,
            color: color
        }
    }
};