/** @jsx jsx */
import { jsx } from "theme-ui"
import PropTypes from "prop-types"

import { Link } from "gatsby"
import Img from "gatsby-image"

const Hero = ({ children, headline, button, imgFluid }) => (
  <section
    sx={{
      display: "flex",
      alignItems: "center",
      position: "relative",
      width: "100vw",
      height: "100vh",
      color: "secondary",
      p: [3, 4],
    }}
  >
    <div
      sx={{
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      }}
    >
      <Img
        fluid={imgFluid}
        style={{ height: "100%" }}
        imgStyle={{ objectFit: "cover" }}
      />
    </div>
    <div
      sx={{
        position: "relative",
        maxWidth: "400px",
        zIndex: "10",
        color: "text",
      }}
    >
      <h2
        sx={{
          fontSize: 2,
          mb: 3,
        }}
      >
        {headline}
      </h2>
      <p
        sx={{
          fontSize: 0,
        }}
      >
        {children}
      </p>
      <div>
        <button
          sx={{
            variant: "buttons.hero",
          }}
        >
          <Link
            to={button.link}
            sx={{
              variant: "anchors.hero",
            }}
          >
            <span
              sx={{
                color: "btnText",
              }}
            >
              {button.text}
            </span>
          </Link>
        </button>
      </div>
    </div>
  </section>
)

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  headline: PropTypes.string.isRequired,
  button: PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }),
  imgFluid: PropTypes.object.isRequired,
}

export default Hero
