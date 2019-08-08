/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const TeamMember = ({ children, name, position, imgFixed }) => (
  <div
    sx={{
      float: ['none', 'left'],
      width: ['auto', '50%'],
      px: 2,
      py: 3,
    }}
  >
    <div
      sx={{
        position: 'absolute',
      }}
    >
      <Img fixed={imgFixed} />
    </div>
    <div
      sx={{
        display: ['block', 'flex'],
        flexDirection: 'column',
        position: 'relative',
        mt: [4, 5],
        ml: ['40%', '30%'],
      }}
    >
      <h3
        sx={{
          fontSize: 3,
          fontWeight: 'heading',
          mb: 1,
        }}
      >
        {name}
      </h3>
      <p
        sx={{
          fontSize: 2,
        }}
      >
        {position}
      </p>
    </div>
    <div
      sx={{
        fontSize: 1,
        lineHeight: '26px',
        mt: 3,
        mr: [0, 2],
      }}
    >
      {children}
    </div>
  </div>
)

TeamMember.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
}

export default TeamMember
