

// const io = require("socket.io")(7900)
let users = {};

//     Socket.on("send",message =>{
//         Socket.broadcast.emit("recieve",{message: message,name : user[Socket.id]})
//     });
// })


const express = require('express');
const app = express();
const http = require('http');
const { emit } = require('process');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);




io.on("connection",socket =>{
  socket.on("new-user-joined",(name)=>{
    console.log(`user name : ${name}`)
    // users[socket.id] = name
    let sokid = socket.id
    let username = name
    sokid = username
      socket.broadcast.emit("user-joined",sokid)
        socket.on('chat message', (msg) => {
          io.emit('chat message', `${sokid}: ${msg}`);
      });
      socket.on("disconnect",()=>{
        socket.broadcast.emit("user-gone",sokid)
      });
  });
});



app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log("a user connected")
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });


  io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      console.log('message: ' + msg);
    });
  });

 

  // io.on('connection', (socket) => {
  //   socket.on('chat message', (msg) => {
  //     io.emit('chat message', `${sokid} ${msg}`);
  //   });
  // });





server.listen(4000, () => {
  console.log('listening on *:4000');
});