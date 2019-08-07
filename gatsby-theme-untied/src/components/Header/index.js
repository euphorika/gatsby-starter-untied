/** @jsx jsx */
import { jsx } from 'theme-ui'
import { StaticQuery, graphql, Link } from 'gatsby'

import Navigation from '../Navigation/'
import Logo from '../Logo/'

export const PureHeader = ({ siteTitle, data }) => (
  <div
    sx={{
      bg: 'primary',
    }}
  >
    <header
      sx={{
        margin: '0 auto',
        maxWidth: 'max-page-width',
        p: '1.45rem 1.0875rem',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <h1
        sx={{
          m: 0,
          display: 'flex',
          alignItems: 'center',
          fontSize: '18px',
        }}
      >
        <Link
          to="/"
          sx={{
            variant: 'anchors.header',
          }}
        >
          <Logo />
        </Link>
        <Link
          to="/"
          sx={{
            variant: 'anchors.header',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <Navigation entries={data.allMainNavigationYaml.edges} />
    </header>
  </div>
)

const Header = props => {
  return (
    <StaticQuery
      query={graphql`
        query MainNavigationQuery {
          allMainNavigationYaml {
            edges {
              node {
                id
                name
                link
                title
                target
              }
            }
          }
        }
      `}
      render={data => <PureHeader {...props} data={data} />}
    />
  )
}

export default Header
