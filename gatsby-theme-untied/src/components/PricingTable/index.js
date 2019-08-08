import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './styles.module.styl'

const PricingTable = ({
  children,
  id,
  headline,
  price,
  imgFluid,
  callToAction,
}) => (
  <section className={styles.pricingTableSection} id={id}>
    <h3 className={styles.headline}>{headline}</h3>
    <p className={styles.price}>{price}</p>
    <Img fluid={imgFluid} alt={headline} />
    <div className={styles.description}>{children}</div>
    <div className={styles.callToAction}>
      <Link to={callToAction.link}>{callToAction.text}</Link>
    </div>
  </section>
)

PricingTable.propTypes = {
  children: PropTypes.node.isRequired,
  headline: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  imgFluid: PropTypes.object.isRequired,
  callToAction: PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }),
}

export default PricingTable
