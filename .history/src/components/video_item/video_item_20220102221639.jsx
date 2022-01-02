import React from 'react'
import styles from './video_item.module.css'

const VideoItem = (props) => (
  <li>
    <img src={props.video.snippet.thumbnails.medium.url}></img>
    <div>
      <span>{props.video.snippet.title}</span>
      <span>{props.video.snippet.channelTitle}</span>
    </div>
  </li>
)

export default VideoItem
