import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Testimonial from "../Testimonial/"

export default () => {
  const data = useStaticQuery(graphql`
    query TestimonialExampleQuery {
      site {
        siteMetadata {
          components {
            testimonials {
              name
              img
              body
            }
          }
        }
      }
      sarah: file(relativePath: { eq: "testimonial/sarah.png" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div>
      {data.site.siteMetadata.components.testimonials.map((value, key) => (
        <Testimonial
          key={key}
          name={value.name}
          imgFixed={data.sarah.childImageSharp.fixed}
        >
          {value.body}
        </Testimonial>
      ))}
    </div>
  )
}
