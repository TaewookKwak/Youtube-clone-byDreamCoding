import React from 'react'
import styles from './video_item.module.css'

const VideoItem = ({ video: { snippet } }) => (
  <li>
    <img src={snippet.thumbnails.medium.url}></img>
    <div>
      <p>{snippet.title}</p>
      <p>{snippet.channelTitle}</p>
    </div>
  </li>
)

export default VideoItem
