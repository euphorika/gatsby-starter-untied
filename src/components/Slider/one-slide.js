import React from 'react'
import Img from 'gatsby-image'

const OneSlide = ({ image }) => (
  <div className="one-slide">
    <Img fixed={image} />
  </div>
)

export default OneSlide
