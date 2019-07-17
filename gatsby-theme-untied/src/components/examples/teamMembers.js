import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import TeamMembers from '../TeamMembers/'
import TeamMember from '../TeamMembers/team-member'

export default () => {
  const data = useStaticQuery(graphql`
    query TeamMembersExampleQuery {
      site {
        siteMetadata {
          components {
            teamMembers {
              name
              position
              body
            }
          }
        }
      }
      business: file(
        relativePath: { eq: "team-members/Gatsby-Hans-Hinrich.png" }
      ) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      person: file(relativePath: { eq: "team-members/Gatsby-Ulf-Knulf.png" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      teacher: file(
        relativePath: { eq: "team-members/Gatsby-Karla-Marla.png" }
      ) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      user: file(relativePath: { eq: "team-members/Gatsby-Esta-Bester.png" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  const teamMemberImages = ['business', 'person', 'teacher', 'user']

  return (
    <div>
      <TeamMembers>
        {data.site.siteMetadata.components.teamMembers.map((value, key) => (
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
    </div>
  )
}
