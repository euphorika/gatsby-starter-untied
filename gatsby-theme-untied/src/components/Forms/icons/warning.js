import React from "react"
import PropTypes from "prop-types"

const FormWarningIcon = ({ width, height }) => {
  const svgString =
    '<svg id="Ebene_1" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.69 56.69"><defs><style>.cls-1{fill:#f59d42}.cls-2{font-size:38.53px;fill:#fff;font-family:OpenSans-Regular,Open Sans}</style></defs><title>Gatsby-icons</title><path class="cls-1" d="M28.35 56.69A28.35 28.35 0 1 0 0 28.34a28.34 28.34 0 0 0 28.35 28.35"/><text class="cls-2" transform="translate(22.66 43.09)">!</text></svg>'

  return (
    <span
      style={{ display: "inline-block", width: width, height: height }}
      dangerouslySetInnerHTML={{ __html: svgString }}
    />
  )
}

FormWarningIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
}

FormWarningIcon.defaultProps = {
  width: "100%",
  height: "auto",
}

export default FormWarningIcon
