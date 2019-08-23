/** @jsx jsx */
import PropTypes from "prop-types"
import Img from "gatsby-image"

import { jsx } from "theme-ui"

const OneSlide = ({ image }) => (
  <div
    sx={{
      float: "left",
      width: "100%",
    }}
  >
    <Img fluid={image} />
  </div>
)

OneSlide.propTypes = {
  image: PropTypes.object.isRequired,
}

export default OneSlide
