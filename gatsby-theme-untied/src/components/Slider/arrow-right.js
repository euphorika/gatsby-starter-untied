/** @jsx jsx */
import PropTypes from "prop-types"

import { jsx } from "theme-ui"

const ArrowRight = ({ color }) => (
  <span
    sx={{
      position: "absolute",
      width: ["40px", "60px", "80px"],
      right: ["-15px", "-20px", "-25px"],
    }}
    dangerouslySetInnerHTML={{
      __html: `<svg id="Ebene_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 84.1 85.5"><style>.st3{clip-path:url(#SVGID_2_);fill:none;stroke:#fff}</style><defs><path id="SVGID_1_" d="M24.1 28.4h35v35h-35z"/></defs><clipPath id="SVGID_2_"><use xlink:href="#SVGID_1_" overflow="visible"/></clipPath><g clip-path="url(#SVGID_2_)"><defs><path id="SVGID_3_" d="M24.1 28.4h35v35h-35z"/></defs><clipPath id="SVGID_4_"><use xlink:href="#SVGID_3_" overflow="visible"/></clipPath><g opacity=".39" clip-path="url(#SVGID_4_)"><defs><path id="SVGID_5_" d="M15.1 21.4h53v43h-53z"/></defs><clipPath id="SVGID_6_"><use xlink:href="#SVGID_5_" overflow="visible"/></clipPath><path clip-path="url(#SVGID_6_)" fill="#fff" d="M24.1 28.4h35v35h-35z"/></g></g><path class="st3" d="M35.3 32.6l12.6 12.7M35.3 57.3l12.6-12.7"/></svg>`,
    }}
  />
)

ArrowRight.propTypes = {
  color: PropTypes.string,
}

ArrowRight.defaultProps = {
  color: "#000",
}

export default ArrowRight
