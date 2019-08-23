import merge from "lodash/merge"
import checkable from "./checkable-variant"

const paddingTop = 4
const paddingLeft = 6
const width = 6
const height = 10

export default merge(
  {
    ".label": {
      ".checkmark": {
        "&::after": {
          left: `${paddingLeft}px`,
          top: `${paddingTop}px`,
          width: `${width}px`,
          height: `${height}px`,
          borderStyle: "solid",
          borderColor: "checkmark",
          borderWidth: "0 3px 3px 0",
          transform: "rotate(45deg)",
        },
      },
    },
  },
  checkable
)
