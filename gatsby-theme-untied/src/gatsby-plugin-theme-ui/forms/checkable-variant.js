import merge from 'lodash/merge'
import inputs from './input-variant'

const dimensions = 20

export default merge(
  {
    display: 'inline-block',
    '.label': {
      position: 'relative',
      '&:hover': {
        '.element': {
          '& ~ .checkmark': {
            bg: 'mutedLight',
          },
        },
      },
      '.element': {
        position: 'absolute',
        opacity: 0,
        cursor: 'pointer',
        height: 0,
        width: 0,
        '&:checked': {
          '& ~ .checkmark': {
            bg: 'mutedLight',
            '&::after': {
              display: 'block',
            },
          },
        },
        '&:required': {
          '& + .after-form-element': {
            '&::before': {
              pl: `${dimensions + 6}px`,
            },
          },
        },
      },
      '.checkmark': {
        position: 'absolute',
        top: 0,
        left: 0,
        height: `${dimensions}px`,
        width: `${dimensions}px`,
        backgroundColor: 'checkableBackground',
        border: 'solid 1px',
        borderColor: 'checkmark',
        '&::after': {
          content: '""',
          position: 'absolute',
          display: 'none',
        },
      },
    },
  },
  inputs,
  {
    '.label': {
      p: 0,
      '.element': {
        '&:required': {
          '& + .after-form-element': {
            '&::before': {
              marginTop: 0,
              position: 'static',
            },
          },
        },
      },
    },
  }
)
