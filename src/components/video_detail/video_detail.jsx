import styles from './video_detail.module.css'
import React from 'react'

function VideoDetail({ video }) {
  return (
    <section className={styles.detail}>
      <iframe
        className={styles.video}
        type="text/html"
        title="youtube video player"
        width="100%"
        height="500px"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <h2>{video.snippet.title}</h2>
      <h2>{video.snippet.channelTitle}</h2>
      <pre className={styles.description}>{video.snippet.description}</pre>
    </section>
  )
}

export default VideoDetail
