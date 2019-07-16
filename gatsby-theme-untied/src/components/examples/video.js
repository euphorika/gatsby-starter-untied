import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Video from '../Video/'

export default () => {
  const data = useStaticQuery(graphql`
    query Video {
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

  console.log(data)

  return (
    <div>
      {data.site.siteMetadata.components.video.map((value, key) => (
        <Video key={key} videos={value.source} />
      ))}
    </div>
  )
}
