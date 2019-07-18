import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import PricingTable from '../PricingTable/'

import styles from './pricing-table.module.styl'

export default () => {
  const data = useStaticQuery(graphql`
    query PricingTableExampleQuery {
      site {
        siteMetadata {
          locales
          components {
            pricingTable {
              headline
              price
              currency
              img
              callToAction {
                text
                link
              }
              body
            }
          }
        }
      }
      productImage1: file(relativePath: { eq: "product/product-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4928) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      productImage2: file(relativePath: { eq: "product/product-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4928) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      productImage3: file(relativePath: { eq: "product/product-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4928) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const { locales } = data.site.siteMetadata
  const productImages = [
    data.productImage1,
    data.productImage2,
    data.productImage3,
  ]

  return (
    <div className={styles.pricingTableExampleContainer}>
      {data.site.siteMetadata.components.pricingTable.map((value, key) => {
        const formattedPrice = new Intl.NumberFormat(locales, {
          style: 'currency',
          currency: value.currency,
        }).format(value.price)

        return (
          <PricingTable
            key={key}
            headline={value.headline}
            price={formattedPrice}
            imgFluid={productImages[key].childImageSharp.fluid}
            callToAction={value.callToAction}
          >
            {value.body}
          </PricingTable>
        )
      })}
    </div>
  )
}
