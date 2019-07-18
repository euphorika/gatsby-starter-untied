import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.styl'

const Video = ({
  videos,
  poster,
  playsInline,
  autoPlay,
  preload,
  loop,
  muted,
  controls,
}) => (
  <section className={styles.videoContainer}>
    <div className={styles.innerContainer}>
      <video
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

Video.defaultProps = {
  preload: 'auto',
  playsInline: true,
  muted: true,
  loop: true,
  controls: true,
  autoPlay: true,
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
