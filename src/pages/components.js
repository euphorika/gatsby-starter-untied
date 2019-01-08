import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

import Hero from '../components/Hero/'
import TeamMembers from '../components/TeamMembers/'
import TeamMember from '../components/TeamMembers/team-member'
import CallToAction from '../components/CallToAction/'
import Slider from '../components/Slider/'
import PricingTable from '../components/PricingTable/'
import Forms from '../components/Forms/'
import Video from '../components/Video/'
import Testimonial from '../components/Testimonial/'
import Callout from '../components/Callout/'

const ComponentsPage = ({ data }) => {
  const { teamMembers, testimonials } = data.site.siteMetadata.components
  const teamMemberImages = ['business', 'person', 'teacher', 'user']
  const testimonialImages = ['teacher']

  return (
    <Layout>
      <Hero />
      <TeamMembers>
        {teamMembers.map((value, key) => (
          <TeamMember
            key={key}
            name={value.name}
            position={value.position}
            imgFixed={data[teamMemberImages[key]].childImageSharp.fixed}
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
      {testimonials.map((value, key) => (
        <Testimonial
          key={key}
          name={value.name}
          imgFixed={data[testimonialImages[key]].childImageSharp.fixed}
        >
          {value.body}
        </Testimonial>
      ))}
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
          teamMembers {
            name
            position
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
