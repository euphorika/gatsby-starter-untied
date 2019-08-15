/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Callout = ({ message, button }) => (
  <section
    sx={{
      textAlign: 'center',
      p: 4,
      mx: 4,
      my: 5,
      bg: 'accent',
      borderRadius: 1,
    }}
  >
    <h2
      sx={{
        fontSize: 3,
        color: '#f1f1f1',
        lineHeight: '1.2em',
        mb: 1,
        p: 0,
      }}
    >
      {' '}
      {message}{' '}
    </h2>
    <button
      sx={{
        bg: 'accent',
        fontSize: 3,
        border: 'none',
      }}
    >
      <Link
        sx={{
          variant: 'anchors.callout',
          fontWeight: 'bold',
          textDecoration: 'underline',
          color: '#f1f1f1',
        }}
        to={button.link}
      >
        {button.text}
      </Link>
    </button>
  </section>
)

Callout.propTypes = {
  message: PropTypes.string.isRequired,
  button: PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }),
}
export default Callout
