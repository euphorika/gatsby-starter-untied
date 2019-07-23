import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Video from '../Video/'

export default () => {
  const data = useStaticQuery(graphql`
    query VideoExample {
      site {
        siteMetadata {
          components {
            video {
              poster
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
        <Video key={key} poster={value.poster} videos={value.source} />
      ))}
    </div>
  )
}
