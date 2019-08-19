import colors from './colors'
import anchors from './anchors'

export default {
  initialColorMode: 'light',
  useCustomProperties: true,
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 4, 8, 16, 32, 64, 128],
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
  radii: [4, 8, 16],
  buttons: {
    hero: {
      cursor: 'pointer',
      textRendering: 'geometricPrecision',
      bg: 'btnBgHero',
      outline: 'none',
      width: '100%',
      maxWidth: '300px',
      border: 0,
      display: 'inline-block',
      borderRadius: 0,
      fontSize: 0,
      padding: 3,
    },
    nav: {
      cursor: 'pointer',
      textRendering: 'geometricPrecision',
      color: 'primary',
      bg: 'background',
      border: 'none',
      width: '35px',
      position: 'absolute',
      top: '24px',
      right: '10px',
      outline: 'none',
    },
  },
  anchors: {
    header: anchors.default,
    nav: anchors.default,
    hero: anchors.default,
    callout: anchors.default,
  },
  styles: {
    a: anchors.default,
    ul: {
      listStyleType: 'none',
    },
    ol: {
      listStyleType: 'none',
    },
  },
}
