import React from 'react'
import PropTypes from 'prop-types'

class Video extends React.Component {
  render() {
    const options = {
      poster: this.props.poster,
      preload: this.props.preload,
      playsInline: this.props.playsInline,
      autoPlay: this.props.autoPlay,
      muted: this.props.muted,
      loop: this.props.loop,
      controls: this.props.controls,
    }
    const displayVideos = this.props.videos.map((video, id) => (
      <source key={video.id} src={video.src} type={video.type} />
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
