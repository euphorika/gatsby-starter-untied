import colors from './colors'
import elements from './forms/element-variant'
import inputs from './forms/input-variant'
import textarea from './forms/textarea-variant'
import select from './forms/select-variant'
import checkbox from './forms/checkbox-variant'
import radio from './forms/radio-variant'
import button from './forms/button-variant'
import message from './forms/message-variant'
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
  forms: {
    elements,
    inputs,
    textarea,
    select,
    checkbox,
    radio,
    button,
    message,
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
  anchors: {
    header: anchors.default,
    nav: anchors.default,
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
