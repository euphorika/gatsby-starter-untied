import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.styl'

const TeamMembers = ({ children }) => (
  <section className={styles.teamMemberSection}>
    <div className={styles.innerContainer}>{children}</div>
  </section>
)

TeamMembers.propTypes = {
  children: PropTypes.node.isRequired,
}

export default TeamMembers
