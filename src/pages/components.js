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

const ComponentsPage = ({ data }) => {
  const { teamMembers, pricingTable } = data.site.siteMetadata.components
  const images = ['business', 'person', 'teacher', 'user']

  return (
    <Layout>
      <Hero />
      <TeamMembers>
        {teamMembers.map((value, key) => (
          <TeamMember
            key={key}
            name={value.name}
            position={value.position}
            imgFixed={data[images[key]].childImageSharp.fixed}
          >
            {value.body}
          </TeamMember>
        ))}
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
}

export default ComponentsPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        components {
          teamMembers {
            name
            position
            body
          }
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
