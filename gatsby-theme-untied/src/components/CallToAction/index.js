/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const CallToAction = ({ button }) => (
  <section
    sx={{
      margin: 0,
    }}
  >
    <button
      sx={{
        display: 'block',
        borderRadius: 1,
        bg: 'primary',
        textAlign: 'center',
        fontSize: 2,
        fontWeight: '600',
        p: ['15px 100px', '20px 170px'],
        mt: '20px',
        mb: '20px',
        ml: 'auto',
        mr: 'auto',
        '&:hover': {
          opacity: '1',
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
              //content: '\00bb',
              position: 'absolute',
              top: '0',
              right: '-20px',
              transition: '0.5s',
              opacity: '1',
              right: '0',
            },

            '&:hover': {
              paddingRight: 4,
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
