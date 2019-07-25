import React from 'react'
import PropTypes from 'prop-types'

const MenuOpen = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.91 15.39">
    <path
      fill={color}
      d="M0 0h17.91v1H0zM0 7.2h17.91v1H0zM0 14.39h17.91v1H0z"
    />
  </svg>
)

MenuOpen.propTypes = {
  color: PropTypes.string,
}

MenuOpen.defaultProps = {
  color: '#f1f1f1',
}

export default MenuOpen
