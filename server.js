const socket = io(); 

function sendMessage() {
    const text = document.getElementById('input').value;
    socket.emit('chat message', text); // Отправка на сервер
}