import React from 'react'

import Layout from '../components/layout'

import HeroExample from '../components/examples/hero'
import TeamMembersExample from '../components/examples/teamMembers'
import CallToActionExample from '../components/examples/callToAction'
import SliderExample from '../components/examples/slider'
import PricingTableExample from '../components/examples/pricingTable'
import Forms from '../components/Forms/'
import Video from '../components/Video/'
import TestimonialsExample from '../components/examples/testimonial'
import CalloutExample from '../components/examples/callout'

const videos = [
  {
    id: 0,
    src: '/videos/sample-video-1.mp4',
    type: 'video/mp4',
    poster: '/videos/big_buck_bunny.jpg',
  },
  {
    id: 1,
    src: '/videos/sample-video-1.webm',
    type: 'videos/webm',
    poster: '/videos/big_buck_bunny.jpg',
  },
]

const ComponentsPage = () => {
  return (
    <Layout>
      <HeroExample />
      <TeamMembersExample />
      <CallToActionExample />
      <SliderExample />
      <PricingTableExample />
      <Forms />
      <Video videos={videos} />
      <TestimonialsExample />
      <CalloutExample />
    </Layout>
  )
}

export default ComponentsPage
