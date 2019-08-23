/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import PropTypes from "prop-types"

import imgSrc from "./video-play-icon.svg"

class Video extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showOverlay: true,
    }
    this.handleOverlay = this.handleOverlay.bind(this)
    this.handlePlayPause = this.handlePlayPause.bind(this)
  }

  handleOverlay() {
    this.setState({
      showOverlay: !this.state.showOverlay,
    })
  }

  handlePlayPause() {
    this.refs.vidRef.play()
  }

  render() {
    const {
      videos,
      poster,
      playsInline,
      autoPlay,
      preload,
      loop,
      muted,
      controls,
    } = this.props

    return (
      <section
        sx={{
          position: "relative",
          textAlign: "center",
        }}
      >
        <div>
          {this.state.showOverlay ? (
            <div>
              <img
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: ["50px", "100px"],
                  height: ["50px", "100px"],
                  ml: ["-25px", "-50px"],
                  mt: ["-25px", "-50px"],
                }}
                src={imgSrc}
                alt="Play Video"
                onClick={() => this.handlePlayPause()}
              />
            </div>
          ) : null}

          <video
            onPlay={() => this.handleOverlay()}
            onPause={() => this.handleOverlay()}
            ref="vidRef"
            sx={{
              width: "100%",
              height: "auto",
            }}
            poster={poster}
            preload={preload}
            playsInline={playsInline}
            muted={muted}
            loop={loop}
            controls={controls}
            autoPlay={autoPlay}
          >
            {videos.map((video, id) => (
              <source key={video.id} src={video.src} type={video.type} />
            ))}
          </video>
        </div>
      </section>
    )
  }
}

Video.defaultProps = {
  preload: "auto",
  playsInline: true,
  muted: true,
  loop: false,
  controls: true,
  autoPlay: false,
}

Video.propTypes = {
  poster: PropTypes.string,
  preload: PropTypes.oneOf(["none", "preload", "auto"]),
  playsInline: PropTypes.bool,
  autoPlay: PropTypes.bool,
  muted: PropTypes.bool,
  loop: PropTypes.bool,
  controls: PropTypes.bool,
  src: PropTypes.string,
  type: PropTypes.string,
}

export default Video
