import { useEffect, useState } from 'react'
import Search_header from './components/search_header/search_header'
import VideoList from './components/video_list/video_list'
import styles from './App.module.css'

function App({ youtube }) {
  const [videos, setVideos] = useState([])
  const search = (query) => {
    youtube.search(query).then((videos) => setVideos(videos))
  }
  useEffect(() => {
    youtube.mostPopular().then((videos) => setVideos(videos))
  }, [])
  return (
    <div className={styles.app}>
      <Search_header onSearch={search} />
      <VideoList videos={videos} />
    </div>
  )
}

export default App
