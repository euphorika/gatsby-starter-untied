import React from 'react'
import PropTypes from 'prop-types'

const FormErrorIcon = ({ width, height }) => {
  const svgString =
    '<svg id="Ebene_1" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.69 56.69"><defs><style>.cls-1{fill:#e9426c}.cls-2{fill:#fff}</style></defs><title>Gatsby-icons</title><path class="cls-1" d="M28.35 56.69A28.35 28.35 0 1 0 0 28.34a28.34 28.34 0 0 0 28.35 28.35"/><path class="cls-2" transform="rotate(-45 28.351 28.346)" d="M27.17 11.14h2.35v34.41h-2.35z"/><path class="cls-2" transform="rotate(-45 28.351 28.346)" d="M11.14 27.17h34.41v2.35H11.14z"/></svg>'

  return (
    <span
      style={{ display: 'inline-block', width: width, height: height }}
      dangerouslySetInnerHTML={{ __html: svgString }}
    />
  )
}

FormErrorIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
}

FormErrorIcon.defaultProps = {
  width: '100%',
  height: 'auto',
}

export default FormErrorIcon
