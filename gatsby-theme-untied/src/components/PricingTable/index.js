/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'
import Img from 'gatsby-image'

const PricingTable = ({
  children,
  id,
  headline,
  price,
  imgFluid,
  callToAction,
}) => (
  <section
    id={id}
    sx={{
      mx: ['auto', 3],
      my: 4,
      width: '100%',
      maxWidth: '300px',
      fontSize: 0,
      py: 2,
      border: 'solid 1px',
      borderColor: 'muted',
      scrollSnapAlign: 'start',
      flexShrink: ['0', 'unset'],
      mr: ['50px', '15px'],
      webkitTransformOrigin: 'center center',
      transformOrigin: 'center center',
      webkitTransform: 'scale(1)',
      transform: 'scale(1)',
      webbkitTransition: '-webkit-transform 0.5s',
      transition: 'transform 0.5s',
    }}
  >
    <h3
      sx={{
        m: 0,
        px: 3,
        fontSize: 2,
      }}
    >
      {headline}
    </h3>
    <p
      sx={{
        mb: 2,
        px: 3,
        fontSize: 2,
      }}
    >
      {price}
    </p>
    <Img fluid={imgFluid} alt={headline} />
    <div
      sx={{
        mt: 2,
        px: 3,
      }}
    >
      {children}
    </div>
    <div
      sx={{
        mt: 3,
        px: 3,
      }}
    >
      <Link
        sx={{
          display: 'inline-block',
          width: '100%',
          textAlign: 'center',
          color: 'btnText',
          fontSize: 0,
          fontWeight: 'bold',
          bg: 'btnBg',
          textDecoration: 'none',
          borderRadius: 0,
          p: 2,
        }}
        to={callToAction.link}
      >
        {callToAction.text}
      </Link>
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
