import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

import Hero from '../components/Hero/'
import TeamMember from '../components/TeamMember/'
import CallToAction from '../components/CallToAction/'
import Slider from '../components/Slider/'
import PricingTable from '../components/PricingTable/'
import Forms from '../components/Forms/'
import Video from '../components/Video/'
import Testimonial from '../components/Testimonial/'
import Callout from '../components/Callout/'

const ComponentsPage = ({ data }) => {
  const { testimonials } = data.site.siteMetadata.components

  return (
    <Layout>
      <Hero />
      <TeamMember />
      <CallToAction />
      <Slider />
      <PricingTable />
      <Forms />
      <Video />
      <Testimonial />
      <Callout />
    </Layout>
  )
}

export default ComponentsPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        components {
          testimonials {
            name
            img
            body
          }
        }
      }
    }
  }
`
