import React from 'react'

import styles from './styles.module.styl'

const TeamMembers = ({ children }) => (
  <section className={styles.teamMemberSection}>
    <div className={styles.innerContainer}>{children}</div>
  </section>
)

export default TeamMembers
