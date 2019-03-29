import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Slider from '../Slider'

export default () => {
    const data = useStaticQuery(graphql`
      query SliderExampleQuery {
        site {
            siteMetadata {
                components {
                    slider {

                    }
                }
            }
        }
        autumn: file(relativePath: { eq: "slider/autumn.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 4928) {
                ...GatsbyImageSharpFluid
                }
            }
        }
        clouds: file(relativePath: { eq: "slider/clouds.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 4928) {
                 ...GatsbyImageSharpFluid
            }
            }
        }
        forest: file(relativePath: { eq: "slider/forest.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 4928) {
                 ...GatsbyImageSharpFluid
                }   
            }
        }
     }
    `)
    const sliderImages = [forest, clouds, autumn]
    const {sliderImages} = data

    return (
        <div>
            <Slider images = {sliderImages} />
        </div>
    )
}