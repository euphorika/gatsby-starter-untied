import React from 'react'

const FormWarningIcon = () => {
  const svgString =
    '<svg id="Ebene_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 133.5 135.4"><style>.st0{fill:#e9426c}.st1{fill:#fff}</style><path class="st0" d="M66.8 99.6c18.1 0 32.7-14.3 32.7-31.9S84.8 35.8 66.8 35.8 34 50.1 34 67.7s14.7 31.9 32.8 31.9"/><path class="st1" d="M63.8 81.1c0-1.8.8-2.7 2.4-2.7.8 0 1.4.2 1.8.7s.6 1.1.6 2c0 .8-.2 1.5-.6 2-.4.5-1 .7-1.8.7-.7 0-1.3-.2-1.7-.6-.5-.4-.7-1.1-.7-2.1zm3.4-5.8h-2.1l-1-21h4.1l-1 21z"/></svg>'

  return <span dangerouslySetInnerHTML={{ __html: svgString }} />
}

export default FormWarningIcon
