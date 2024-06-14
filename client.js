// client.js
const socket = io();

document.getElementById('setNicknameButton').addEventListener('click', () => {
    const nickname = document.getElementById('nickname').value;
    if (nickname) {
        socket.emit('setNickname', nickname);
        document.getElementById('nickname').disabled = true;
        document.getElementById('setNicknameButton').disabled = true;
    }
});

socket.on('updatePlayers', (players) => {
    const playersList = document.getElementById('playersList');
    playersList.innerHTML = '';
    players.forEach(player => {
        const li = document.createElement('li');
        li.textContent = player.nickname;
        playersList.appendChild(li);
    });
});
