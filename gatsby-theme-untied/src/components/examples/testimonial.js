import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Testimonial from '../Testimonial/'

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
      teacher: file(relativePath: { eq: "testimonial/teacher.png" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
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
          imgFixed={data.teacher.childImageSharp.fixed}
        >
          {value.body}
        </Testimonial>
      ))}
    </div>
  )
}
