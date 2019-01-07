import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const TeamMember = ({ children, name, position, imgFixed }) => (
  <div className="team-member">
    <Img fixed={imgFixed} />
    <h3>{name}</h3>
    <p>
      <strong>{position}</strong>
    </p>
    <div className="bio">{children}</div>
  </div>
)

TeamMember.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
}

export default TeamMember
