import merge from 'lodash/merge'
import input from './input-variant'

const width = '100%'
const arrowThickness = 2
const arrowPadding = 4

export default merge(
  {
    '.select-box': {
      width,
      '&::after': {
        content: '""',
        position: 'absolute',
        mt: `calc(0.5em + ${arrowThickness + arrowPadding}px)`,
        right: 'calc(5% + 10px)',
        WebkitTransform: 'rotate(45deg)',
        transform: 'rotate(45deg)',
        borderStyle: 'solid',
        borderColor: 'selectArrowColor',
        borderWidth: `0 ${arrowThickness}px ${arrowThickness}px 0`,
        display: 'inline-block',
        padding: `${arrowPadding}px`,
        pointerEvents: 'none',
      },
      select: {
        width: '100%',
        MozAppearance: 'none',
        WebkitAppearance: 'none',
        appearance: 'none',
        background: 'selectBackground',
        '&:hover': {
          bg: 'selectHoverBackground',
        },
        '&:focus': {
          bg: 'selectHoverBackground',
        },
        '&:active': {
          bg: 'selectHoverBackground',
        },
      },
    },
  },
  input
)
