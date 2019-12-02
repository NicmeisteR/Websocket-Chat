const WebSocket = require('ws');
 
const server = new WebSocket.Server({ port: 8080 });
 
server.on('connection', socket => {
  socket.on('message', message => {
    server.clients.forEach(client => {
      client.send(message);
      console.log( message);
      
    });
  });
  // socket.send('Hello world!');
});

function receiveMessage(socket, message) {
    // console.log(`${message.userName} is saying: ${message.content}`)
    socket.send(`${message.userName} is saying: ${message.content}`);
}