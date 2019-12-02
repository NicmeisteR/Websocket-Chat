const HOST = location.origin.replace(/^http/, 'ws')
const ws = new WebSocket(HOST);

ws.onmessage = function (event) {
    $('#server-time').innerHTML = 'Server time: ' + event.data;
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