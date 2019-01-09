import React from 'react'

import styles from './styles.module.styl'
import PropTypes from 'prop-types'
//import { graphql, StaticQuery } from 'gatsby'
//import BackgroundImage from 'gatsby-background-image'

const Hero = ({ children, headline, button, backImg}) => (
  <section className={styles.heroSection}>
    {/* <div className = {styles.bckImg}>
      <BackgroundImage fluid={backImg}/> */}
	      <h2>{headline}</h2>
        <p>{children}</p>

      

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
