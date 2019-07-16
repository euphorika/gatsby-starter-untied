import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export default () => {
  const data = useStaticQuery(graphql`
    query video {
      site {
        siteMetadata {
          components {
            video {
              source {
                id
                src
                type
              }
            }
          }
        }
      }
    }
  `)
  return (
    <div>
      {data.site.siteMetadata.components.video.map((value, key) => (
        <Video key={key} src={value.src} type={value.type} />
      ))}
    </div>
  )
}
