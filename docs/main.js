const socket = new WebSocket('wss://nicmeister.herokuapp.com:8080');

socket.addEventListener('message', event => {
    let message = JSON.parse(event.data);
    $("#chat").append(`<tr id="msg${messagesCount}"><td>${message.userName}: ${message.content}</td></tr>`);
});

socket.addEventListener('open', () => {
    // sendMessage(socket, "NicmeisteR", message);
});

function sendMessage(socket, userName, content) {
    socket.send(
      JSON.stringify({
        userName,
        content
      })
    )
}

let array = [];
let messagesCount = 0;

$('#send').click(() => {
    messagesCount += 1;
    sendMessage(socket, $('#username').val(), $('#message').val());
})