/** @jsx jsx */
import { jsx } from 'theme-ui'

const Footer = () => (
  <footer
    sx={{
      textAlign: 'center',
      bg: 'primary',
      p: '1.45rem 1.0875rem',
      color: 'secondary',
    }}
  >
    <div
      sx={{
        fontSize: 3,
        mb: '10px',
      }}
    >
      Gatsby Theme Untied
    </div>
    <div
      sx={{
        fontSize: 0,
      }}
    >
      &copy; 2018
    </div>
  </footer>
)

export default Footer
