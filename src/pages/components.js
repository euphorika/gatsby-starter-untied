import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

import HeroExample from '../components/examples/hero'
import TeamMembers from '../components/TeamMembers/'
import TeamMember from '../components/TeamMembers/team-member'
import CallToActionExample from '../components/examples/callToAction'
import Slider from '../components/Slider/'
import PricingTable from '../components/PricingTable/'
import Forms from '../components/Forms/'
import Video from '../components/Video/'
import Testimonial from '../components/Testimonial/'
import CalloutExample from '../components/examples/callout'

const ComponentsPage = ({ data }) => {
  const { locales, components } = data.site.siteMetadata
  const { teamMembers, testimonials, pricingTable } = components
  const teamMemberImages = ['business', 'person', 'teacher', 'user']
  const testimonialImages = ['teacher']

  return (
    <Layout>
      <HeroExample />
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
      <CallToActionExample />
      <Slider />
      {pricingTable.map((value, key) => {
        const formattedPrice = new Intl.NumberFormat(locales, {
          style: 'currency',
          currency: value.currency,
        }).format(value.price)

        return (
          <PricingTable
            key={key}
            headline={value.headline}
            price={formattedPrice}
            callToAction={value.callToAction}
          >
            {value.body}
          </PricingTable>
        )
      })}
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
      <CalloutExample />
    </Layout>
  )
}

export default ComponentsPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        locales
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
