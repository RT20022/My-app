// // const socket = io("http://localhost:7900")

// const form = document.getElementById("sendmail");
// const messageinput = document.getElementById("message")
// const messagecontainer = document.querySelector(".main")

const append = (message,position)=>{
    const messageElement =document.createElement("div");
    messageElement.innerText = message;
    messageElement.classList.add("message");
    messageElement.classList.add("position");
    messagecontainer.append(messageElement)
}


// const name = prompt("Enter you name to join");
// socket.emit("new-user-joined",name)


// socket.on("user-joined",name=>{
//     append("${name} joined the chat")
// })

