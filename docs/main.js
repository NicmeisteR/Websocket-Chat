const HOST = location.origin.replace(/^http/, 'ws').replace(":5500", "");
// const socket = new WebSocket(HOST + ":8080");
const socket = new WebSocket("ws://192.168.15.164:8080");

socket.addEventListener('message', event => {
    let message = JSON.parse(event.data);
    $("#chat").append(`<tr id="msg${messagesCount}"><td>${message.userName}: ${message.content}</td></tr>`);
});

socket.onmessage = function (event) {
    console.log('Server time: ' + event.data);
};

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