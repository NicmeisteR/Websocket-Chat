const WebSocket = require('ws');
const socket = new WebSocket('ws://localhost:8080');

let message = process.argv[2];
 
socket.addEventListener('open', () => {
    sendMessage(socket, "NicmeisteR", message);
});

socket.addEventListener('message', event => {
    console.log();
    let test = JSON.parse(event.data);
  console.log(`Message from server: ${test.userName} is saying: ${test.content}`);
});

function sendMessage(socket, userName, content) {
    socket.send(
      JSON.stringify({
        userName,
        content
      })
    )
}