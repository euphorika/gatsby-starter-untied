import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import PricingTable from '../PricingTable/'

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
              callToAction {
                text
                link
              }
              body
            }
          }
        }
      }
    }
  `)
  const { locales } = data.site.siteMetadata

  return (
    <div>
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
            callToAction={value.callToAction}
          >
            {value.body}
          </PricingTable>
        )
      })}
    </div>
  )
}
