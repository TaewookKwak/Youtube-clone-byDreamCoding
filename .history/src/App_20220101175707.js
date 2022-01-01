import { useEffect, useState } from 'react'
import './App.css'
import VideoList from './components/video_list/video_list'

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
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log('error', error))
  }, [])
  return <VideoList videos={videos} />
}

export default App
