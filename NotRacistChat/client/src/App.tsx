import { useEffect, useState } from 'react'
import { socket } from './lib/socket';

type Message = {
  id: number,
  authorName: string,
  body: string
}

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [authorName, setAuthorName] = useState("")
  const [body, setBody] = useState("")

  function sendMessage() {
    socket.emit("new-message", {
      authorName,
      body,
    })
  }

  useEffect(() => {
    const callback = (message: Message) => {
      setMessages((old) => [message, ...old])
    };

    socket.on("new-message", callback);

    return () => {
      socket.off("new-message", callback);
    }
  }, [])

  return (
    <div className="container">
      <input type="text" value={authorName} onChange={e => setAuthorName(e.target.value)} placeholder="Your name" />
      <textarea value={body} onChange={e => setBody(e.target.value)} placeholder="Message body" />
      <button onClick={sendMessage}>Send</button>
      <div className="messages">
        {messages.map((message) => (
          <div className="message" key={message.id}>
            <div>
              {message.authorName}
            </div>
            <div>
              {message.body}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
