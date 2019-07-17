import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import styles from './styles.module.styl'

const TeamMember = ({ children, name, position, imgFixed }) => (
  <div className={styles.teamMember}>
    <div className={styles.imgContainer}>
      <Img className={styles.memberAvatar} fixed={imgFixed} />
    </div>
    <div className={styles.memberInfo}>
      <h3 className={styles.memberName}>{name}</h3>
      <p className={styles.memberPosition}>{position}</p>
    </div>
    <div className={styles.memberBio}>{children}</div>
  </div>
)

TeamMember.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
}

export default TeamMember
