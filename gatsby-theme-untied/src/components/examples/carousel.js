/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"

import Carousel from "../Carousel/"
import PricingTable from "../PricingTable/"

export default () => {
  const data = useStaticQuery(graphql`
    query CarouselExampleQuery {
      site {
        siteMetadata {
          locales
          components {
            pricingTable {
              headline
              price
              currency
              img
              callToAction {
                text
                link
              }
              body
            }
          }
        }
      }
      productImage1: file(relativePath: { eq: "product/product-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4928) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      productImage2: file(relativePath: { eq: "product/product-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4928) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      productImage3: file(relativePath: { eq: "product/product-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4928) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const { locales } = data.site.siteMetadata
  const productImages = [
    data.productImage1,
    data.productImage2,
    data.productImage3,
  ]

  return (
    <div
      css={{
        maxWidth: "1200px",
        margin: "auto",
      }}
    >
      <Carousel>
        {data.site.siteMetadata.components.pricingTable.map((value, key) => {
          const formattedPrice = new Intl.NumberFormat(locales, {
            style: "currency",
            currency: value.currency,
          }).format(value.price)

          return (
            <PricingTable
              key={key}
              id={`slide-${key}`}
              headline={value.headline}
              price={formattedPrice}
              imgFluid={productImages[key].childImageSharp.fluid}
              callToAction={value.callToAction}
            >
              {value.body}
            </PricingTable>
          )
        })}
      </Carousel>
    </div>
  )
}
