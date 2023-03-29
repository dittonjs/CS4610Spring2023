import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { socket } from './lib/socket';
console.log(socket);
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const callback = () => {
      setCount((c) => c+1);
    };

    socket.on("new-client", callback);

    return () => {
      socket.off("new-client", callback);
    }
  }, [])

  return (
    <div className="count">
      {count}
    </div>
  )
}

export default App
