import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [videos, setVideos] = useState([])
  useEffect(() => {
    console.log('useEffect')
  }, [])
  return <div>Hello</div>
}

export default App
