import React from 'react'

const VideoItem = (props) => (
  <div>
    <h1>{props.video.snippet.title}</h1>
  </div>
)

export default VideoItem
