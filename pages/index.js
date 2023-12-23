// pages/index.js

// Importing necessary React hooks for managing state and side effects
import { useState, useEffect } from 'react';

// Importing the Socket.IO client library
import io from 'socket.io-client';

// Creating a Socket.IO client instance connected to the server at http://localhost:3001
const socket = io('http://localhost:3001');

// Exporting a React functional component named Home
export default function Home() {
  // State variables to manage the list of messages and the new message input
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  // Effect hook that runs once when the component mounts
  useEffect(() => {
    // Event listener for the 'message' event from the server
    socket.on('message', (message) => {
      // Updating the messages state with the new message
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Cleanup function that disconnects the socket when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, []); // The empty dependency array ensures the effect runs only once

  // Function to send a new message to the server
  const sendMessage = () => {
    // Emitting a 'message' event to the server with the new message
    socket.emit('message', newMessage);
    // Clearing the new message input
    setNewMessage('');
  };

  // JSX structure for rendering the chat interface
  return (
    <div>
      <div>
        {/* Mapping over the messages and rendering each as a div */}
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      {/* Input field for typing a new message */}
      <input
        type="text"
        value={newMessage}
        // Updating the new message state on input change
        onChange={(e) => setNewMessage(e.target.value)}
      />
      {/* Button to send the new message */}
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}