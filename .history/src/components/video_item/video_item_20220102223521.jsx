import React from 'react'
import styles from './video_item.module.css'

const VideoItem = ({ video: { snippet } }) => (
  <li className={styles.container}>
    <div className={styles.video}>
      <img
        className={styles.thumbnails}
        src={snippet.thumbnails.medium.url}
      ></img>
      <div className={stlyes.metadata}>
        <p className={styles.title}>{snippet.title}</p>
        <p className={styles.channelTitle}>{snippet.channelTitle}</p>
      </div>
    </div>
  </li>
)

export default VideoItem