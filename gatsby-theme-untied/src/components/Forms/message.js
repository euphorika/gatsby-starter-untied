/** @jsx jsx */
import { jsx } from "theme-ui"
import PropTypes from "prop-types"

const FormMessage = ({ type, children }) => {
  const makeClassName = type => {
    switch (type) {
      case "warn":
        return "warn"

      case "error":
        return "error"

      case "info":
      default:
        return "info"
    }
  }

  if (!children) {
    return null
  }

  return (
    <div
      sx={{
        variant: "forms.message",
      }}
      className={makeClassName(type)}
    >
      {children}
    </div>
  )
}

FormMessage.propTypes = {
  type: PropTypes.oneOf(["info", "warn", "error"]),
  children: PropTypes.node,
}

export default FormMessage
