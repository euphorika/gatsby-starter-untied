import React from 'react'
import PropTypes from 'prop-types'

const OneSlide = ({ image, width, height }) => {
  const backgroundImage = require(`./images/${image}`)
  const styles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat',
    float: 'left',
    width: `${width}px`,
    height: `${height}px`,
  }
  return <div className="slide" style={styles} />
}

OneSlide.defaultProps = {
  width: 300,
  height: 300,
}

OneSlide.propTypes = {
  image: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
}

export default OneSlide
