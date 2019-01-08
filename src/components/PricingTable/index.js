import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import styles from './styles.module.styl'

const PricingTable = ({ children, headline, price, callToAction }) => (
  <section className={styles.pricingTableSection}>
    <h3>{headline}</h3>
    <p>{price}</p>
    <div className={styles.description}>
      {children}
    </div>
    <div className={styles.callToAction}>
      <Link to={callToAction.link}>{callToAction.text}</Link>
    </div>
  </section>
)

PricingTable.propTypes = {
  children: PropTypes.node.isRequired,
  headline: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  callToAction: PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  })
}

export default PricingTable
