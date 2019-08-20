/** @jsx jsx */
import { jsx } from 'theme-ui'

const MenuClose = ({ size = '1em' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentcolor"
    viewBox="0 0 24 24"
    sx={{
      display: 'block',
      margin: 0,
      fontSize: 3,
    }}
  >
    <polygon points="13.37 0.71 12.66 0 6.68 5.98 0.71 0 0 0.71 5.98 6.68 0 12.66 0.71 13.37 6.68 7.39 12.66 13.37 13.37 12.66 7.39 6.68 13.37 0.71" />
  </svg>
)

export default props => (
  <span
    title="Close Menu"
    {...props}
    sx={{
      fontFamily: 'inherit',
      color: 'inherit',
      bg: 'transparent',
      m: 0,
      border: 0,
      appearance: 'none',
    }}
  >
    <MenuClose />
  </span>
)
