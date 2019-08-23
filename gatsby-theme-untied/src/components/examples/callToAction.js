import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import CallToAction from "../CallToAction/"

export default () => {
  const data = useStaticQuery(graphql`
    query CallToActionExampleQuery {
      site {
        siteMetadata {
          components {
            callToAction {
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
      {data.site.siteMetadata.components.callToAction.map((value, key) => (
        <CallToAction key={key} button={value.button} />
      ))}
    </div>
  )
}
