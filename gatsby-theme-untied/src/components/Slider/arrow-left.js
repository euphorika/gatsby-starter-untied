import React from 'react'
import PropTypes from 'prop-types'

const ArrowLeft = ({ color }) => (
  <span
    dangerouslySetInnerHTML={{
      __html: `<svg id="Ebene_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 84.1 85.5"><style>.st3{clip-path:url(#SVGID_2_);fill:none;stroke:#fff}</style><defs><path id="SVGID_1_" d="M24.1 28.4h35v35h-35z"/></defs><clipPath id="SVGID_2_"><use xlink:href="#SVGID_1_" overflow="visible"/></clipPath><g clip-path="url(#SVGID_2_)"><defs><path id="SVGID_3_" d="M24.1 28.4h35v35h-35z"/></defs><clipPath id="SVGID_4_"><use xlink:href="#SVGID_3_" overflow="visible"/></clipPath><g opacity=".39" clip-path="url(#SVGID_4_)"><defs><path id="SVGID_5_" d="M15.1 27.4h53v43h-53z"/></defs><clipPath id="SVGID_6_"><use xlink:href="#SVGID_5_" overflow="visible"/></clipPath><path clip-path="url(#SVGID_6_)" fill="#fff" d="M24.1 28.4h35v35h-35z"/></g></g><path class="st3" d="M47.9 59.1L35.3 46.5M47.9 34.5L35.3 47.1"/></svg>`,
    }}
  />
)

ArrowLeft.propTypes = {
  color: PropTypes.string,
}

ArrowLeft.defaultProps = {
  color: '#f1f1f1',
}

export default ArrowLeft
