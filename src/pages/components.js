import React from 'react'

import Layout from '../components/layout'

import HeroExample from '../components/examples/hero'
import TeamMembersExample from '../components/examples/teamMembers'
import CallToActionExample from '../components/examples/callToAction'
import Slider from '../components/Slider/'
import PricingTableExample from '../components/examples/pricingTable'
import Forms from '../components/Forms/'
import Video from '../components/Video/'
import TestimonialsExample from '../components/examples/testimonial'
import CalloutExample from '../components/examples/callout'

const ComponentsPage = () => {
  return (
    <Layout>
      <HeroExample />
      <TeamMembersExample />
      <CallToActionExample />
      <Slider />
      <PricingTableExample />
      <Forms />
      <Video />
      <TestimonialsExample />
      <CalloutExample />
    </Layout>
  )
}

export default ComponentsPage
