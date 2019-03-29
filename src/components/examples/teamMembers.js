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
