import { useEffect, useState } from 'react'
import Search_header from './components/search_header/search_header'
import VideoList from './components/video_list/video_list'
import styles from './App.module.css'

function App() {
  const [videos, setVideos] = useState([])
  const search = (query) => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    }

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyATnJJe08YFVjwP6spvks6-sPL4xpTCuVg`,
      requestOptions,
    )
      .then((response) => response.json())
      .then((result) =>
        result.items.map((item) => ({ ...item, id: item.id.videoId })),
      )
      .then((items) => setVideos(items))
      .catch((error) => console.log('error', error))
  }
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
  return (
    <div className={styles.app}>
      <Search_header onSearch={search} />
      <VideoList videos={videos} />
    </div>
  )
}

export default App
