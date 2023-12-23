//server.js
// Importing the Express.js framework for creating a web server
const express = require('express');
// Importing the built-in HTTP module for creating an HTTP server
const http = require('http');
// Importing the Socket.IO library for handling real-time bidirectional communication
const socketIO = require('socket.io');

// Creating an Express application
const app = express();
// Creating an HTTP server using the Express application
const server = http.createServer(app);

// Creating a Socket.IO instance and configuring CORS for allowing connections from http://localhost:3000
const io = socketIO(
  server,
  {
    cors: {
      origin: 'http://localhost:3000',
      methods: ['GET', 'POST'],
    },
  }
);

// Simple route to handle the root path; responds with a plain text message
app.get('/', (req, res) => {
  res.send('Hello, this is your Socket.IO server!');
});

// Event listener for the 'connection' event when a client connects to the server
io.on('connection', (socket) => {
  // Logging a message when a user connects
  console.log('User connected');

  // Event listener for the 'message' event from a client
  socket.on('message', (message) => {
    // Broadcasting the received message to all connected clients
    io.emit('message', message);
  });

  // Event listener for the 'disconnect' event when a user disconnects
  socket.on('disconnect', () => {
    // Logging a message when a user disconnects
    console.log('User disconnected');
  });
});

// Defining the port for the server to listen on, using 3001 as the default port
const PORT = process.env.PORT || 3001;

// Starting the server and logging a message once it's running
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});