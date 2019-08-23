/** @jsx jsx */
import { jsx } from "theme-ui"
import PropTypes from "prop-types"

import { Link } from "gatsby"
import Img from "gatsby-image"

const PricingTable = ({
  id,
  headline,
  price,
  imgFluid,
  callToAction,
  children,
}) => (
  <section
    id={id}
    sx={{
      mx: ["auto", 3],
      py: 4,
      width: "100%",
      scrollSnapAlign: "start",
      fontSize: 0,
    }}
  >
    <div
      sx={{
        py: 4,
        border: "solid 1px",
        borderColor: "muted",
      }}
    >
      <h3
        sx={{
          m: 0,
          px: 4,
          fontSize: 2,
        }}
      >
        {headline}
      </h3>
      <p
        sx={{
          mb: 2,
          px: 4,
          fontSize: 2,
        }}
      >
        {price}
      </p>
      <Img fluid={imgFluid} alt={headline} />
      <div
        sx={{
          mt: 3,
          px: 4,
        }}
      >
        {children}
      </div>
      <div
        sx={{
          mt: 3,
          px: 4,
        }}
      >
        <Link
          sx={{
            display: "inline-block",
            width: "100%",
            textAlign: "center",
            color: "btnText",
            fontSize: 0,
            fontWeight: "bold",
            bg: "btnBg",
            textDecoration: "none",
            borderRadius: 0,
            p: 2,
          }}
          to={callToAction.link}
        >
          {callToAction.text}
        </Link>
      </div>
    </div>
  </section>
)

PricingTable.defaultProps = {
  id: null,
}

PricingTable.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
  headline: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  imgFluid: PropTypes.object.isRequired,
  callToAction: PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }),
}

export default PricingTable
