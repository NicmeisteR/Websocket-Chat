// const WebSocket = require('ws');
 
// const server = new WebSocket.Server({ port: 8080 });
 
// server.on('connection', socket => {
//   socket.on('message', message => {
//     server.clients.forEach(client => {
//       client.send(message);
//       console.log( message);
      
//     });
//   });
//   // socket.send('Hello world!');
// });

// function receiveMessage(socket, message) {
//     // console.log(`${message.userName} is saying: ${message.content}`)
//     socket.send(`${message.userName} is saying: ${message.content}`);
// }

// 'use strict';

// const express = require('express');
// const SocketServer = require('ws').Server;
// const path = require('path');

// const PORT = process.env.PORT || 3000;
// const INDEX = path.join(__dirname, '/docs/index.html');

// const server = express()
//   .use((req, res) => res.sendFile(INDEX) )
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`));

// const wss = new SocketServer({ server });

// wss.on('connection', (ws) => {
//   console.log('Client connected');
//   ws.on('close', () => console.log('Client disconnected'));
// });

// setInterval(() => {
//   wss.clients.forEach((client) => {
//     client.send(new Date().toTimeString());
//   });
// }, 1000);