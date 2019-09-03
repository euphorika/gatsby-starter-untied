module.exports = {
  siteMetadata: {
    title: "Gatsby Theme Untied",
    locales: "de-DE",
    components: {
      callToAction: [
        {
          button: {
            text: "Get Started",
            link: "/",
          },
        },
      ],
      callout: [
        {
          message: "Hey! Pay attention to this very important message.",
          button: {
            text: "Click Here",
            link: "/",
          },
        },
      ],
      hero: [
        {
          headline: "Hero Block",
          body:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
          button: {
            text: "Click Here",
            link: "/",
          },
        },
      ],
      testimonials: [
        {
          name: "Sarah Author",
          img: "sarah.png",
          body:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
        },
      ],
      team: {
        headline: "Our Team",
        teamMembers: [
          {
            name: "Hans Hinrich",
            position: "CEO",
            body:
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
          },
          {
            name: "Ulf Knulf",
            position: "Person",
            body:
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
          },
          {
            name: "Karla Marla",
            position: "Teacher",
            body:
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
          },
          {
            name: "Esta Bester",
            position: "User",
            body:
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
          },
        ],
      },
      pricingTable: [
        {
          headline: "Product 1",
          price: 12.99,
          currency: "EUR",
          img: "product-1.jpg",
          callToAction: {
            text: "Buy",
            link: "/components/",
          },
          body:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
        },
        {
          headline: "Product 2",
          price: 13.99,
          currency: "EUR",
          img: "product-2.jpg",
          callToAction: {
            text: "Buy",
            link: "/components/",
          },
          body:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
        },
        {
          headline: "Product 3",
          price: 14.99,
          currency: "EUR",
          img: "product-3.jpg",
          callToAction: {
            text: "Buy",
            link: "/components/",
          },
          body:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
        },
      ],
      video: [
        {
          poster: "/videos/big_buck_bunny.jpg",
          source: [
            {
              id: 0,
              src: "/videos/sample-video-1.mp4",
              type: "video/mp4",
            },
            {
              id: 1,
              src: "/videos/sample-video-1.webm",
              type: "videos/webm",
            },
          ],
        },
      ],
    },
  },
  plugins: [
    "gatsby-theme-untied",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1024,
            },
          },
        ],
      },
    },
  ],
}
