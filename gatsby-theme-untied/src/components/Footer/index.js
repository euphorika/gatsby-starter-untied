/** @jsx jsx */
import { jsx } from 'theme-ui'

const Footer = () => (
  <footer
    sx={{
      display: ['block', 'inline-flex'],
      justifyContent: 'space-between',
      width: '100%',
      textAlign: 'center',
      borderTop: '1px solid',
      borderColor: 'primary',
      bg: 'secondary',
      p: '1rem 1.95rem',
      color: 'primary',
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
