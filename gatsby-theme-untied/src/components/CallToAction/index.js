/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const CallToAction = ({ button }) => (
  <section>
    <button
      sx={{
        display: 'block',
        borderRadius: 1,
        bg: 'primary',
        textAlign: 'center',
        fontSize: 2,
        fontWeight: 'bold',
        p: ['15px 100px', '20px 170px'],
        mx: 'auto',
        my: '20px',
        '&:hover': {
          right: '0',
        },
      }}
    >
      <Link to={button.link}>
        <span
          sx={{
            display: 'inline-block',
            position: 'relative',
            transition: '0.5s',
            color: 'secondary',
            '&::after': {
              content: '"\\00bb"',
              position: 'absolute',
              top: '0',
              right: '0',
              transition: '0.5s',
              opacity: '0',
            },

            '&:hover::after': {
              opacity: '1',
            },

            '&:hover': {
              paddingRight: 3,
            },
          }}
        >
          {' '}
          {button.text}{' '}
        </span>
      </Link>
    </button>
  </section>
)

CallToAction.propTypes = {
  button: PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }),
}

export default CallToAction
