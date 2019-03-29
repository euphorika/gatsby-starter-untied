import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Hero from '../Hero/'

export default () => {
  const data = useStaticQuery(graphql`
    query HeroExampleQuery {
      site {
        siteMetadata {
          components {
            hero {
              headline
              body
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
    }
  `)
  const { heroImage } = data

  return (
    <div>
      {data.site.siteMetadata.components.hero.map((value, key) => (
        <Hero
          key={key}
          headline={value.headline}
          imgFluid={heroImage.childImageSharp.fluid}
          button={value.button}
        >
          {value.body}
        </Hero>
      ))}
    </div>
  )
}
