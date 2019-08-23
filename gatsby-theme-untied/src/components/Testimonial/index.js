/** @jsx jsx */
import { jsx } from "theme-ui"
import PropTypes from "prop-types"

import Img from "gatsby-image"

const Testimonial = ({ children, name, imgFixed }) => (
  <section
    sx={{
      p: 3,
    }}
  >
    <div
      sx={{
        textAlign: "center",
      }}
    >
      <Img fixed={imgFixed} />
    </div>
    <blockquote
      sx={{
        my: 3,
        mx: "auto",
        fontSize: 0,
        maxWidth: "400px",
        textAlign: "center",
        "&::before": {
          content: "open-quote",
        },
        "&::after": {
          content: "close-quote",
        },
      }}
    >
      {children}
    </blockquote>
    <div
      sx={{
        textAlign: "center",
      }}
    >
      <strong>{name}</strong>
    </div>
  </section>
)

Testimonial.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  imgFixed: PropTypes.object.isRequired,
}

export default Testimonial
