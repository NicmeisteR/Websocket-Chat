// const WebSocket = require('ws');
 
// const server = new WebSocket.Server({ port: 8080 });

// function receiveMessage(socket, message) {
//     // console.log(`${message.userName} is saying: ${message.content}`)
//     socket.send(`${message.userName} is saying: ${message.content}`);
// }

'use strict';

const express = require('express');
const SocketServer = require('ws').Server;
const path = require('path');

const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, 'index.html');

const server = express()
  .use(express.static(__dirname + '/'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

const wss = new SocketServer({ server });

wss.on('connection', socket => {
  console.log('Client connected');
  wss.on('close', () => console.log('Client disconnected'));
  socket.on('message', message => {
    wss.clients.forEach(client => {
      client.send(message);
      console.log( message);
    });
  });
});

// setInterval(() => {
//   wss.clients.forEach((client) => {
//     client.send(new Date().toTimeString());
//   });
// }, 1000);