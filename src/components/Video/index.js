import React from 'react';
import styles from './styles.module.styl';
import video_ele_webm from './elephants_dream.webm';
import video_ele_mp4 from './elephants_dream.mp4';

function Video() {
    const videos = [
        {
            src: video_ele_webm,
            type: "video/webm"
        },
        {
            src: video_ele_mp4,
            type: "video/mp4"
        }
    ]




    const displayVideos = videos.map((video, index) =>
              <source src={video.src} type={video.type} />
          )


    return (
      <video className={styles.videoSection} playsInline autoPlay controls>
        {displayVideos}
      </video>
    )
}
export default Video
