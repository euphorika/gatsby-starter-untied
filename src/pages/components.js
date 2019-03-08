import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

import HeroExample from '../components/examples/hero'
import TeamMembersExample from '../components/examples/teamMembers'
import CallToActionExample from '../components/examples/callToAction'
import Slider from '../components/Slider/'
import PricingTable from '../components/PricingTable/'
import Forms from '../components/Forms/'
import Video from '../components/Video/'
import TestimonialsExample from '../components/examples/testimonial'
import CalloutExample from '../components/examples/callout'

const ComponentsPage = ({ data }) => {
  const { locales, components } = data.site.siteMetadata
  const { pricingTable } = components

  return (
    <Layout>
      <HeroExample />
      <TeamMembersExample />
      <CallToActionExample />
      <Slider />
      {pricingTable.map((value, key) => {
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
      <Forms />
      <Video />
      <TestimonialsExample />
      <CalloutExample />
    </Layout>
  )
}

export default ComponentsPage

export const query = graphql`
  query {
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
`
