import React from 'react'
import styles from './video_item.module.css'

const VideoItem = (props) => (
  <li>
    <img src={props.video.snippet.thumbnails.medium.url}></img>
    <h1>{props.video.snippet.title}</h1>
    <span>{props.video.snippet.channelTitle}</span>
  </li>
)

export default VideoItem
