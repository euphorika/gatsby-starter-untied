import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({ svg, className, fill, viewBox, xmlns, xmlnsXlink, path }) => (
  <svg
    className={className}
    viewBox={viewBox}
    xmlns={xmlns}
    xmlnsXlink={xmlnsXlink}
  >
    <path d={path} fill={fill} />
  </svg>
)

Icon.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
}

Icon.propTypes = {
  svg: PropTypes.node,
  fill: PropTypes.string,
  viewBox: PropTypes.string,
  xmlns: PropTypes.string,
  xmlnsXlink: PropTypes.string,
}

export default Icon
