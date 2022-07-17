import { useState, useEffect } from "react"
import { io } from "socket.io-client"

const Home = () => {
  const [songName, setSongName] = useState("")

  useEffect(() => {
    const socket = io("http://localhost:5000/song", {
      transports: ["websocket"],
    })

    socket.on("connect", () => {
      socket.on("name", (name) => {
        setSongName(name)
      })
    })
  }, [])

  return (
    <div>
      <div>
        <p>
          <span>song name: </span>
          <span>{songName}</span>
        </p>
      </div>
      <div>
        <iframe src="http://localhost:5173" frameBorder="0" />
      </div>
    </div>
  )
}

export default Home
