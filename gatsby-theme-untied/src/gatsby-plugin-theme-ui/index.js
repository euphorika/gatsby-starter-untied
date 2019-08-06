import colors from './colors'

export default {
  initialColorMode: 'light',
  useCustomProperties: true,
  colors,
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'Georgia, serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  letterSpacings: {
    body: 'normal',
    caps: '0.2em',
  },
  buttons: {
    nav: {
      cursor: 'pointer',
      textRendering: 'geometricPrecision',
      color: 'secondary',
      bg: 'primary',
      border: 'none',
      width: '50px',
      position: 'absolute',
      top: '5px',
      right: '10px',
      p: '16px',
      outline: 'none',
    },
  },
  styles: {
    a: {
      color: 'secondary',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
      '&.active': {
        textDecoration: 'underline',
      },
    },
    ul: {
      listStyleType: 'none',
    },
    ol: {
      listStyleType: 'none',
    },
  },
}
