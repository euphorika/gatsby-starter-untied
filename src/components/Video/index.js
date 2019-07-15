import React from 'react'
import PropTypes from 'prop-types'

class Video extends React.Component {
  render() {
    const options = {
      poster: [],
      preload: [],
      playsInline: true,
      autoPlay: false,
      muted: true,
      loop: false,
      controls: true,
    }
    const displayVideos = this.props.videos.map((video, id) => (
      <source key={video.id} src={video.src} type={video.type} poster={video.poster} />
    ))
    return (
      <div>
        <video {...options}>{displayVideos}</video>
      </div>
    )
  }
}

Video.propTypes = {
  poster: PropTypes.string,
  preload: PropTypes.oneOf(['none', 'preload', 'auto']),
  playsInline: PropTypes.bool,
  autoPlay: PropTypes.bool,
  muted: PropTypes.bool,
  loop: PropTypes.bool,
  controls: PropTypes.bool,
  src: PropTypes.string,
  type: PropTypes.string,
}

export default Video
