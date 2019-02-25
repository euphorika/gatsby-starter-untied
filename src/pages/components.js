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
//import OneSlide from '../components/Slider/one-slide'

const ComponentsPage = ({ data }) => {
  const { locales, components } = data.site.siteMetadata
  const {
    teamMembers,
    testimonials,
    pricingTable,
    hero,
    callout,
    callToAction,
    //slider,
  } = components
  const { heroImage, nature, mountains, beach} = data
  const teamMemberImages = ['business', 'person', 'teacher', 'user']
  const testimonialImages = ['teacher']
  const sliderImages = [nature , mountains, beach, nature, mountains]

  return (
    <Layout>
      {hero.map((value, key) => (
        <Hero
          key={key}
          headline={value.headline}
          imgFluid={heroImage.childImageSharp.fluid}
          button={value.button}
        >
          {value.body}
        </Hero>
      ))}
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

      {callToAction.map((value, key) => (
        <CallToAction key={key} button={value.button} />
      ))}

      <Slider images = {sliderImages} />     

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
      {callout.map((value, key) => (
        <Callout key={key} message={value.message} button={value.button} />
      ))}
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
          hero {
            headline
            body
            button {
              text
              link
            }
          }
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
          callToAction {
            button {
              text
              link
            }
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
          callout {
            message
            button {
              text
              link
            }
          }
        }
      }
    }
    heroImage: file(relativePath: { eq: "hero/beach-by-frank-mckenna.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4928) {
          ...GatsbyImageSharpFluid
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
    nature: file(relativePath: { eq: "slider/nature.png" }) {
      childImageSharp {
        fluid(maxWidth: 4928) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mountains: file(relativePath: { eq: "slider/mountains.png" }) {
      childImageSharp {
        fluid(maxWidth: 4928){
          ...GatsbyImageSharpFluid
        }
      }
    }
    beach: file(relativePath: { eq: "slider/beach.png" }) {
      childImageSharp {
        fluid(maxWidth: 4928) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
