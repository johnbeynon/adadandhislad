import React from "react"


function transform(_url) {
  if (!_url) { return ''; }
  if(_url){
  _url = _url.replace('watch?v=','embed/');
  }
  return _url
}

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className="video">
    <iframe
      src={transform(videoSrcURL)}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; encrypted-media; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
      width="560" 
      height="315"
    />
  </div>
)
export default Video

