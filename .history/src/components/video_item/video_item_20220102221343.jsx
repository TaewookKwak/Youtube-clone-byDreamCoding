import React from 'react'

const VideoItem = (props) => (
  <div>
    <img src={props.video.snippet.thumbnails.medium.url}></img>
    <h1>{props.video.snippet.title}</h1>
    <span>{props.video.snippet.channelTitle}</span>
  </div>
)

export default VideoItem
