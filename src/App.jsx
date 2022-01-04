import { useCallback, useEffect, useState } from 'react'
import Search_header from './components/search_header/search_header'
import VideoList from './components/video_list/video_list'
import styles from './App.module.css'
import VideoDetail from './components/video_detail/video_detail'

function App({ youtube }) {
  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectVideo] = useState(null)
  const selectVideo = (video) => {
    setSelectVideo(video)
  }
  const search = useCallback((query) => {
    setSelectVideo(null)
    youtube.search(query).then((videos) => {
      setVideos(videos)
    })
  }, [])
  useEffect(() => {
    youtube.mostPopular().then((videos) => setVideos(videos))
  }, [youtube])
  return (
    <div className={styles.app}>
      <Search_header onSearch={search} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? 'list' : 'grid'}
          />
        </div>
      </section>
    </div>
  )
}

export default App
