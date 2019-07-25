import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.styl'

const MenuIcon = ({ svg, fill, viewBox, xmlns, xmlnsXlink, path }) => (
  <svg
    className={styles.menuIcon}
    viewBox={viewBox}
    xmlns={xmlns}
    xmlnsXlink={xmlnsXlink}
  >
    <path d={path} fill={fill} />
  </svg>
)

MenuIcon.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
}

MenuIcon.propTypes = {
  svg: PropTypes.node,
  fill: PropTypes.string,
  viewBox: PropTypes.string,
  xmlns: PropTypes.string,
  xmlnsXlink: PropTypes.string,
}

export default MenuIcon
