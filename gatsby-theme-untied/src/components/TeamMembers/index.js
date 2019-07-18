import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.styl'

const TeamMembers = ({ headline, children }) => (
  <section className={styles.teamMemberSection}>
    <div className={styles.innerContainer}>
      <h2 className={styles.headline}>{headline}</h2>
      {children}
    </div>
  </section>
)

TeamMembers.defaultProps = {
  headline: 'Our Team',
}

TeamMembers.propTypes = {
  children: PropTypes.node.isRequired,
  headline: PropTypes.string.isRequired,
}

export default TeamMembers
