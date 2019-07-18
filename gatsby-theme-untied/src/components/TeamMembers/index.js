import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.styl'

const TeamMembers = ({ headline, children }) => (
  <section className={styles.teamMemberSection}>
    <h2 className={styles.headline}>{headline}</h2>
    <div className={styles.innerContainer}>{children}</div>
  </section>
)

TeamMembers.propTypes = {
  children: PropTypes.node.isRequired,
  headline: PropTypes.string,
}

export default TeamMembers
