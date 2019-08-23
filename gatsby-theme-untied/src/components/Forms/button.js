/** @jsx jsx */
import { jsx } from "theme-ui"
import PropTypes from "prop-types"

const Button = ({ children, type, options }) => (
  <div
    sx={{
      variant: "forms.button",
    }}
    className="element-container"
  >
    <button className="button" type={type} {...options}>
      {children}
    </button>
  </div>
)

export default Button

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
  options: PropTypes.object,
}
