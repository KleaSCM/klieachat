Real-Time Chat Application

Overview
This is a simple real-time chat application built with React for the front end and Express with Socket.IO for the back end. The app allows users to send and receive messages in real-time through a WebSocket connection.

Features
Real-time bidirectional communication using Socket.IO
Simple and intuitive chat interface
Automatic scrolling to the latest message
Input field for typing new messages
Clear messages from the input field upon sending
Prerequisites
Node.js installed on your machine
npm (Node Package Manager)

Installation
Clone the Repository

git clone https://github.com/yourusername/realtime-chat-app.git
cd realtime-chat-app
Install Dependencies
Navigate to the project directory and install the required dependencies for both the client and server.


# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
Running the Application
Start the Server
Navigate to the server directory:


cd server
Start the server:


npm start
The server will start and listen on http://localhost:3001.

Start the Client
Open a new terminal window.

Navigate to the client directory:


cd client
Start the client:


npm start
The client will start and open in your default web browser at http://localhost:3000.

Usage
Open the chat interface in your browser.
Type a message in the input field.
Click the "Send" button to send the message.
The message will be broadcast to all connected clients and displayed in the chat interface




This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
