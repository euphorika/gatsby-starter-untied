import React from 'react'
import Layout from '../components/layout'

import { graphql } from 'gatsby'

import Hero from '../components/Hero/'
import TeamMembers from '../components/TeamMembers/'
import CallToAction from '../components/CallToAction/'
import Slider from '../components/Slider/'
import PricingTable from '../components/PricingTable/'
import Forms from '../components/Forms/'
import Video from '../components/Video/'
import Testimonial from '../components/Testimonial/'
import Callout from '../components/Callout/'

import TeamMember from '../components/TeamMembers/team-member.js'

const ComponentsPage = ({ data }) => (
  <Layout>
    <Hero />
    <TeamMembers>
      <TeamMember
        name="Hans Hinrich"
        position="CEO"
        imgFixed={data.business.childImageSharp.fixed}
      >
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam
      </TeamMember>
      <TeamMember
        name="Ulf Knulf"
        position="Person"
        imgFixed={data.person.childImageSharp.fixed}
      >
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam
      </TeamMember>
      <TeamMember
        name="Karla Marla"
        position="Teacher"
        imgFixed={data.teacher.childImageSharp.fixed}
      >
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam
      </TeamMember>
      <TeamMember
        name="Esta Bester"
        position="User"
        imgFixed={data.user.childImageSharp.fixed}
      >
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam
      </TeamMember>
    </TeamMembers>
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

export const query = graphql`
  query {
    business: file(relativePath: { eq: "team-members/business.png" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    person: file(relativePath: { eq: "team-members/person.png" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    teacher: file(relativePath: { eq: "team-members/teacher.png" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    user: file(relativePath: { eq: "team-members/user.png" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
