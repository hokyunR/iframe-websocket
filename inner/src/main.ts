import './style.css'
import { io } from "socket.io-client";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `<div id='name'></div>`
const name = document.querySelector('#name') as HTMLDivElement

const socket = io('http://localhost:5000/cat',{
  transports: ["websocket"]
})

socket.on("connect", () => {
  socket.on("name", (message) => {
    name.textContent = `cat name: ${message}`
  })
});
