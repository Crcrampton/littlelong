let Sentencer = require('sentencer');

module.exports = {
    genRoomId : ()  => {
        let big = [
            "substantial", "considerable", "great", "huge", "immense", "enormous", "extensive", "colossal", "massive", "mammoth", "vast", "prodigious", "tremendous", "gigantic", "giant", "monumental", "mighty", "stupendous", "gargantuan", "elephantine", "titanic", "epic", "mountainous", "megalithic", "monstrous"
        ];

        let currency = [
            "rupee", "dong", "dollar", "pound", "shilling", "peso", "ruble", "won", "yen", "crone"
        ];

        let first = big[Math.floor(Math.random()*big.length)];
        let second = currency[Math.floor(Math.random()*currency.length)];

        let roomCode = first + " " + second;

        return roomCode.toUpperCase();
    },
    addPlayer : (room, player) => {
        if (room && player) {
            room.players[player.id] = player;
            room.playerCount++;
            return room;
        }
    },
    createPlayer : (socket) => {
        return {
            id : socket.id,
            stage: "teamSelect",
        }
    }
};