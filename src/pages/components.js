import React from 'react'
import Layout from '../components/layout'

import Hero from '../components/Hero/'
import TeamMember from '../components/TeamMember/'
import CallToAction from '../components/CallToAction/'
import Slider from '../components/Slider/'
import PricingTable from '../components/PricingTable/'
import Forms from '../components/Forms/'
import Video from '../components/Video/'
import Testimonial from '../components/Testimonial/'

const ComponentsPage = () => (
  <Layout>
    <Hero />
    <TeamMember />
    <CallToAction />
    <Slider />
    <PricingTable />
    <Forms />
    <Video />
    <Testimonial />
  </Layout>
)

export default ComponentsPage
