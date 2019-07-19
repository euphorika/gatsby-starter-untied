import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.styl'

const TeamMembers = ({ headline, children }) => {
  const headlineElement = headline ? (
    <h2 className={styles.headline}>{headline}</h2>
  ) : null
  return (
    <section className={styles.teamMemberSection}>
      <div className={styles.innerContainer}>
        <div>{headlineElement}</div>
        {children}
      </div>
    </section>
  )
}

TeamMembers.propTypes = {
  children: PropTypes.node.isRequired,
  headline: PropTypes.string,
}

export default TeamMembers
