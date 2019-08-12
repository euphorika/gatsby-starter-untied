export default {
  position: 'relative',
  px: 3,
  fontSize: 0,
  '.element': {
    borderWidth: '1px',
    '&:required': {
      '& + .after-form-element': {
        '&::before': {
          content: '"*"',
          display: 'inline-block',
          color: '#000',
        },
      },
    },
    '&:valid': {
      borderColor: 'success',
      backgroundColor: 'lightSuccess',
    },
    '&:invalid': {
      borderColor: 'accent',
      backgroundColor: 'lightAccent',
    },
  },
}
