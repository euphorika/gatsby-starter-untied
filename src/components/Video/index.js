import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.styl'

const videos = [
  { name: 'video 1', src: '/videos/sample-video-1.webm', type: 'video/webm' },
  { name: 'video 2', src: '/videos/sample-video-2.mp4', type: 'video/mp4' },
]

class Video extends React.Component {
  constructor(props) {
    super(props)
    this.videoRefs = []
  }

  componentDidMount() {
    this.videoRefs[0] && this.videoRefs[0].focus()
  }

  render() {
    return (
      <section className={styles.videoSection}>
        <div className={styles.videoContainer}>
          {videos.map((video, index) => (
            <video
              className={styles.video}
              key={index}
              value={video.name}
              ref={ref => (this.videoRefs[index] = ref)}
              src={video.src}
              type={video.type}
              playsInline
              controls
              allowFullScreen
              muted
            />
          ))}
        </div>
      </section>
    )
  }
}

Video.propTypes = {
  src: PropTypes.string,
  playsInline: PropTypes.bool,
  controls: PropTypes.bool,
  allowFullScreen: PropTypes.bool,
  muted: PropTypes.bool,
  children: PropTypes.node,
}

export default Video
