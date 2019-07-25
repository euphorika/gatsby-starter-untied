import React from 'react'
import PropTypes from 'prop-types'

const MenuClose = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.37 13.37">
    <path
      fill={color}
      d="M13.37.71L12.66 0 6.68 5.98.71 0 0 .71l5.98 5.97L0 12.66l.71.71 5.97-5.98 5.98 5.98.71-.71-5.98-5.98L13.37.71z"
    />
  </svg>
)

MenuClose.propTypes = {
  color: PropTypes.string,
}

MenuClose.defaultProps = {
  color: '#f1f1f1',
}

export default MenuClose
