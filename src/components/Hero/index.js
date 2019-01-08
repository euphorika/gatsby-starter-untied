import React from 'react'

import styles from './styles.module.styl'
import PropTypes from 'prop-types'
//import { graphql, StaticQuery } from 'gatsby'
//import BackgroundImage from 'gatsby-background-image'

const Hero = ({ children, headline, button, backImg}) => (
  <section className={styles.heroSection}>
    {/* <div className = {styles.bckImg}>
      <BackgroundImage fluid={backImg}/> */}
      <div className={styles.headline}>
	      <strong>{headline}</strong>
      </div>
      <blockquote>{children}</blockquote>

    {/* <StaticQuery query={graphql`
    query {
      desktop: file(relativePath: { eq: "background.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 4160) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `}
   render={data => {
     // Set ImageData.
     const imageData = data.desktop.childImageSharp
     return (
        <BackgroundImage Tag="section"
                         className={className}
                         fluid={imageData}
                         backgroundColor={BlueBackground}
        >
        </BackgroundImage>
     )
   }
   }
  />*/}

</section>


)
Hero.propTypes = {
  children: PropTypes.node.isRequired,
  headline: PropTypes.string.isRequired,
  // backImg: PropTypes.object.isRequired,
  // button: PropTypes.button.isRequired,
}

export default Hero
