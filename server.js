const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const port = process.env.PORT || 3000;

app.use(express.static('public'));

let players = [];

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('setNickname', (nickname) => {
        players.push({ id: socket.id, nickname });
        io.emit('updatePlayers', players);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
        players = players.filter(player => player.id !== socket.id);
        io.emit('updatePlayers', players);
    });
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
