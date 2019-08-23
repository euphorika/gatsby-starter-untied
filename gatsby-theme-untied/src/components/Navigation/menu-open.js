/** @jsx jsx */
import { jsx } from "theme-ui"

const MenuOpen = ({ size = "1em" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentcolor"
    viewBox="0 0 24 24"
    sx={{
      display: "block",
      margin: 0,
      fontSize: 3,
    }}
  >
    <rect width="20" height="1.23" />
    <rect y="8" width="20" height="1.23" />
    <rect y="16" width="20" height="1.23" />
  </svg>
)

export default props => (
  <span
    title="Toggle Menu"
    {...props}
    sx={{
      color: "inherit",
      bg: "transparent",
      m: 0,
      border: 0,
      appearance: "none",
    }}
  >
    <MenuOpen />
  </span>
)
