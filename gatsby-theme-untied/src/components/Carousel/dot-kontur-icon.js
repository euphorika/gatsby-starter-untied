import React from 'react'
import PropTypes from 'prop-types'

const DotIcon = ({ color }) => (
  <span
    className="dot-icon"
    dangerouslySetInnerHTML={{
      __html: `<svg data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.71 56.72">
  <path d="M28.35 56.72a28.36 28.36 0 1 1 28.36-28.36 28.38 28.38 0 0 1-28.36 28.36zm0-51.23a22.87 22.87 0 1 0 22.87 22.87A22.9 22.9 0 0 0 28.35 5.49z" fill="#3c3c3b"/>
</svg>
  `,
    }}
  />
)

DotIcon.propTypes = {
  color: PropTypes.string,
}

DotIcon.defaultProps = {
  color: '#3c3c3c',
}

export default DotIcon
