import React from "react"
import PropTypes from "prop-types"

const FormInfoIcon = ({ width, height }) => {
  const svgString =
    '<svg id="Ebene_1" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.69 56.69"><defs><style>.cls-1{fill:#b2b1b1}.cls-2{fill:#fff}</style></defs><title>Gatsby-icons</title><path class="cls-1" d="M28.35 56.69A28.35 28.35 0 1 0 0 28.34a28.34 28.34 0 0 0 28.35 28.35"/><path class="cls-2" d="M25.3 34.83v-.92a7.59 7.59 0 0 1 .61-3.28 8.76 8.76 0 0 1 2.28-2.72A14.91 14.91 0 0 0 31.11 25a4.39 4.39 0 0 0 .61-2.38 3.3 3.3 0 0 0-1.12-2.72 4.82 4.82 0 0 0-3.21-.9 10.87 10.87 0 0 0-2.62.32 14 14 0 0 0-2.93 1.15l-1-2.3a14.26 14.26 0 0 1 6.73-1.69A7.35 7.35 0 0 1 32.62 18a5.74 5.74 0 0 1 1.81 4.52 6.61 6.61 0 0 1-.34 2.18 6.17 6.17 0 0 1-1 1.79 23.53 23.53 0 0 1-2.79 2.72 10.44 10.44 0 0 0-2.27 2.44 5.17 5.17 0 0 0-.56 2.58v.57zm-.84 5.05c0-1.54.68-2.31 2.05-2.31a2 2 0 0 1 1.52.59 2.5 2.5 0 0 1 .54 1.72 2.46 2.46 0 0 1-.55 1.7 1.94 1.94 0 0 1-1.51.6 2.06 2.06 0 0 1-1.51-.53 2.31 2.31 0 0 1-.54-1.77z"/></svg>'

  return (
    <span
      style={{ display: "inline-block", width: width, height: height }}
      dangerouslySetInnerHTML={{ __html: svgString }}
    />
  )
}

FormInfoIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
}

FormInfoIcon.defaultProps = {
  width: "100%",
  height: "auto",
}

export default FormInfoIcon
