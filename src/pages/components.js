import React from 'react'
import Layout from '../components/layout'

import Hero from '../components/Hero/'
import TeamMembers from '../components/TeamMembers/'
import CallToAction from '../components/CallToAction/'
import Slider from '../components/Slider/'
import PricingTable from '../components/PricingTable/'
import Forms from '../components/Forms/'
import Video from '../components/Video/'
import Testimonial from '../components/Testimonial/'
import Callout from '../components/Callout/'

const ComponentsPage = () => (
  <Layout>
    <Hero />
    <TeamMembers />
    <CallToAction />
    <Slider />
    <PricingTable />
    <Forms />
    <Video />
    <Testimonial />
    <Callout />
  </Layout>
)

export default ComponentsPage
