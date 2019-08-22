/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const TeamMember = ({ children, name, position, imgFixed }) => (
  <div
    sx={{
      float: ['none', 'left'],
      width: ['auto', '50%'],
      mt: [4, 0],
      px: 2,
      py: 3,
    }}
  >
    <div sx={{ display: 'flex' }}>
      <Img fixed={imgFixed} />
      <div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          pl: 2,
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
            margin: 0,
          }}
        >
          {position}
        </p>
      </div>
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
