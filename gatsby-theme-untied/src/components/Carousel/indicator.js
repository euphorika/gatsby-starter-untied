/** @jsx jsx */
import { jsx } from "theme-ui"
import PropTypes from "prop-types"

const CarouselIndicator = ({ anchor, active, onClick }) => (
  <li
    sx={{
      width: "15px",
      height: "15px",
      borderRadius: "50%",
      border: "solid 1px",
      borderColor: "primary",
      mx: 1,
      bg: active ? "primary" : "none",
    }}
    onClick={onClick}
  >
    <a sx={{ textDecoration: "none" }} href={anchor}>
      &nbsp;
    </a>
  </li>
)

CarouselIndicator.defaultProps = {
  active: false,
}

CarouselIndicator.propTypes = {
  onClick: PropTypes.func.isRequired,
  anchor: PropTypes.string.isRequired,
  active: PropTypes.bool,
}

export default CarouselIndicator
