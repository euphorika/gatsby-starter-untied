import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Callout from "../Callout/"

export default () => {
  const data = useStaticQuery(graphql`
    query CalloutExampleQuery {
      site {
        siteMetadata {
          components {
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
    }
  `)

  return (
    <div>
      {data.site.siteMetadata.components.callout.map((value, key) => (
        <Callout key={key} message={value.message} button={value.button} />
      ))}
    </div>
  )
}
