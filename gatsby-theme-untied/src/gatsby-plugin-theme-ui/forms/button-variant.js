import merge from "lodash/merge"
import element from "./element-variant"

export default merge(
  {
    ".button": {
      bg: "primary",
      borderRadius: 0,
      border: 0,
      px: 3,
      py: 2,
      width: ["100%", "auto"],
      color: "secondary",
    },
  },
  element
)
