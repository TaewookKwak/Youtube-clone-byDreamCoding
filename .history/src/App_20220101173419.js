import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [videos, setVideos] = useState([])
  useEffect(() => {
    const requestOptions = {
      //이 부분은 fetch의 옵션을 전달해줌
      method: 'GET',
      redirect: 'follow',
    }

    fetch(
      'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyATnJJe08YFVjwP6spvks6-sPL4xpTCuVg',
      requestOptions,
    )
      .then((response) => response.text()
      console.log(respone))
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error))
  }, [])
  return <div>Hello</div>
}

export default App
