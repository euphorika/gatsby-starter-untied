import React from 'react'

import Layout from '../components/layout'

import HeroExample from '../components/examples/hero'
import TeamMembersExample from '../components/examples/teamMembers'
import CallToActionExample from '../components/examples/callToAction'
import SliderExample from '../components/examples/slider'
import PricingTableExample from '../components/examples/pricingTable'
import Forms from '../components/Forms/'
import VideoExample from '../components/examples/video'
import TestimonialsExample from '../components/examples/testimonial'
import CalloutExample from '../components/examples/callout'

const ComponentsPage = () => {
  return (
    <Layout>
      <HeroExample />
      <TeamMembersExample />
      <CallToActionExample />
      <SliderExample />
      <PricingTableExample />
      <Forms />
      <VideoExample />
      <TestimonialsExample />
      <CalloutExample />
    </Layout>
  )
}

export default ComponentsPage
