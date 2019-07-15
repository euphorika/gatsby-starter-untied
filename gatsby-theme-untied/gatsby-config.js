const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Gatsby Theme Untied',
    locales: 'de-DE',
    components: {
      callToAction: [
        {
          button: {
            text: 'GET STARTED',
            link: '/',
          },
        },
      ],
      callout: [
        {
          message: 'Hey! Pay attention to this very important message.',
          button: {
            text: 'Cick Here',
            link: '/',
          },
        },
      ],
      hero: [
        {
          headline: 'Hero Block',
          body:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam',
          button: {
            text: 'Click Here',
            link: '/',
          },
        },
      ],
      testimonials: [
        {
          name: 'Sarah Author',
          img: 'sarah.png',
          body:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam',
        },
      ],

      teamMembers: [
        {
          name: 'Hans Hinrich',
          position: 'CEO',
          body:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam',
        },
        {
          name: 'Ulf Knulf',
          position: 'Person',
          body:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam',
        },
        {
          name: 'Karla Marla',
          position: 'Teacher',
          body:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam',
        },
        {
          name: 'Esta Bester',
          position: 'User',
          body:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam',
        },
      ],
      pricingTable: [
        {
          headline: 'Product 1',
          price: 12.99,
          currency: 'EUR',
          callToAction: {
            text: 'Click Me',
            link: '/components/',
          },
          body:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam',
        },
      ],
    },
  },
  plugins: [
    'gatsby-transformer-yaml',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/navigation`,
        name: 'navigation',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
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
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-stylus',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-untied',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: path.resolve(__dirname, 'src/images/gatsby-icon.png'),
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: path.resolve(__dirname, `src/utils/typography`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-offline',
  ],
}
