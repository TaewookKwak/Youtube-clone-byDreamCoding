import React from 'react'
import styles from './video_item.module.css'

const VideoItem = ({ video }) => (
  <li>
    <img src={video.snippet.thumbnails.medium.url}></img>
    <div>
      <p>{video.snippet.title}</p>
      <p>{video.snippet.channelTitle}</p>
    </div>
  </li>
)

export default VideoItem
