import React from 'react'
import styles from './styles.module.styl'

import video from './elephants_dream.webm'

const Video = () => (
  <section className={styles.videoSection}>
    <video playsinline loop controls allowFullScreen>
      <source src={video} type="video/webm" />
    </video>
  </section>
)

export default Video
