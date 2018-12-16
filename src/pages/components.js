import React from 'react'
import Layout from '../components/layout'

import Hero from '../components/Hero/'
import TeamMember from '../components/TeamMember/'
import CallToAction from '../components/CallToAction/'
import Slider from '../components/Slider/'
import PricingTable from '../components/PricingTable/'

const ComponentsPage = () => (
  <Layout>
    <Hero />
    <TeamMember />
    <CallToAction />
    <Slider />
    <PricingTable />
  </Layout>
)

export default ComponentsPage
