import merge from 'lodash/merge'
import elements from './element-variant'

export default merge(
  {
    '.label': {
      p: 2,
      '.element': {
        ml: 2,
      },
    },
    '.element': {
      p: 2,
      width: '100%',
      borderRadius: 0,
      '&:required': {
        '& + .after-form-element': {
          '&::before': {
            position: 'absolute',
            right: '5px',
            mt: 'calc(.5em + 5px)',
          },
        },
      },
    },
    '.icon': {
      position: 'absolute',
      top: ['25%', '50%'],
      mt: '-8px',
      right: '25px',
      width: '15px',
    },
  },
  elements
)
