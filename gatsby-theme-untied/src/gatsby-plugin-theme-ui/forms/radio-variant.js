import merge from 'lodash/merge'
import checkable from './checkable-variant'

const bubbleDimensions = 12
const bubblePadding = 3

export default merge(
  {
    '.checkable': {
      '.label': {
        '.checkmark': {
          borderRadius: '50%',
          '&::after': {
            top: `${bubblePadding}px`,
            left: `${bubblePadding}px`,
            width: `${bubbleDimensions}px`,
            height: `${bubbleDimensions}px`,
            borderRadius: '50%',
            bg: 'checkmark',
          },
        },
      },
    },
  },
  checkable
)
