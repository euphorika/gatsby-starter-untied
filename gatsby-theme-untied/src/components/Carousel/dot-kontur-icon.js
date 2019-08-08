import React from 'react'
import PropTypes from 'prop-types'

const DotIcon = ({ color }) => (
  <span
    dangerouslySetInnerHTML={{
      __html: `<svg fill="${color}" id="Ebene_1" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.71 56.72"><title>Gatsby-dot-kontur-icons</title><path d="M28.34,56.72A28.36,28.36,0,1,1,56.7,28.36,28.38,28.38,0,0,1,28.34,56.72Zm0-51.23A22.87,22.87,0,1,0,51.21,28.36,22.9,22.9,0,0,0,28.34,5.49Z" transform="translate(0.01 0)"/></svg>`,
    }}
  />
)

DotIcon.propTypes = {
  color: PropTypes.string,
}

DotIcon.defaultProps = {
  color: '#3c3c3b',
}

export default DotIcon
