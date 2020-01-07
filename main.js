import { Server } from "ws";

const HOST = location.origin.replace(/^http/, 'ws')
// Use host for server setup.
// const ws = new WebSocket(HOST);

// Use chat.nicmeister.cloud for accessing remote Server.
const ws = new WebSocket("wss://chat.nicmeister.cloud");

ws.onmessage = function (event) {
    // $('#server-time').innerHTML = 'Server time: ' + event.data;
};

ws.addEventListener('message', event => {
    let message = JSON.parse(event.data);
    $("#chat").append(`<tr id="msg${messagesCount}"><td>${message.userName}: ${message.content}</td></tr>`);
});

ws.addEventListener('open', () => {
    // sendMessage(ws, "NicmeisteR", message);
});

function sendMessage(ws, userName, content) {
    ws.send(
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
    sendMessage(ws, $('#username').val(), $('#message').val());
})