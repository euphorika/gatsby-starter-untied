import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Slider from '../Slider/'

export default () => {
  const data = useStaticQuery(graphql`
    query SliderExampleQuery {
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
  const { forest, clouds, autumn } = data
  const sliderImages = [forest, clouds, autumn]

  return <Slider images={sliderImages} />
}
