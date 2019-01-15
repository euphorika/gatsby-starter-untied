module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter Untied',
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
      slider: [
        {
          title: 'Slider',
        },{
          title: 'Slider 2',
        },{
          title: 'Slider 3',
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
        path: `${__dirname}/src/pages`,
        name: 'pages',
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
      resolve: 'gatsby-plugin-navigation',
      options: {
        menues: {
          main: [
            {
              id: 'home',
              name: 'Home',
              link: '/',
              title: 'Title Home',
            },
            {
              id: 'antoher-page',
              name: 'Another Page',
              link: '/another-page/',
              target: '_blank',
            },
            {
              id: 'components',
              name: 'Components Page',
              link: '/components/',
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-untied',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-offline',
  ],
}
