import React from 'react'

import styles from './styles.module.styl'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
	
	
//import BackgroundImage from 'gatsby-background-image'

const Hero = ({ children, headline, button, backImg}) => (
  <section className={styles.heroSection}>
    {/* <div className = {styles.bckImg}>
      <BackgroundImage fluid={backImg}> */}
	      <h2>{headline}</h2> 
        <p>{children}</p>
        <div>
          {/* <Link to ={button.link}>{button.text}</Link> */}
          <button className={styles.button} >
            <Link to = {button.link}>
              <text className={styles.text}>{button.text}</text>
            </Link>
          </button>
        </div>
      {/* </BackgroundImage>
    </div> */}
</section>


)
Hero.propTypes = {
  children: PropTypes.node.isRequired,
  headline: PropTypes.string.isRequired,
  button: PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  })
  // 
}

export default Hero
