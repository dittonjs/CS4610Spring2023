import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [num, setNum] = useState(0.0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER_URL}/random`)
      .then(r => r.json())
      .then(body => {
        setNum(body.num)
        setLoading(false);
      })
  }, [])

  if (loading) return <div>Loading...</div>
  return (
    <div className="App">
      {num}
    </div>
  )
}

export default App
