import React from "react"

import { Layout } from "gatsby-theme-untied"

import HeroExample from "../components/examples/hero"
import TeamMembersExample from "../components/examples/teamMembers"
import SliderExample from "../components/examples/slider"
import CarouselExample from "../components/examples/carousel"
import VideoExample from "../components/examples/video"
import TestimonialsExample from "../components/examples/testimonial"
import CalloutExample from "../components/examples/callout"

const ComponentsPage = () => {
  return (
    <Layout>
      <HeroExample />
      <TeamMembersExample />
      <SliderExample />
      <CarouselExample />
      <VideoExample />
      <TestimonialsExample />
      <CalloutExample />
    </Layout>
  )
}

export default ComponentsPage
