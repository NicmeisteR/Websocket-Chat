const WebSocket = require('ws');
// const HOST = location.origin.replace(/^http/, 'ws')
// Use host for server setup.
// const ws = new WebSocket(HOST);

// Use chat.nicmeister.cloud for accessing remote Server.
const ws = new WebSocket("wss://chat.nicmeister.cloud");

ws.on('open', function open() {
  ws.send('something');
});

ws.on('message', function incoming(data) {
  // Run node app.js to track messages being sent
  console.log(data);
});