import React from 'react'

const FormErrorIcon = () => {
  const svgString =
    '<svg id="Ebene_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 133.5 135.4"><style>.st0{clip-path:url(#SVGID_2_)}.st1{fill:#e9426c}.st2{fill:#fff}</style><defs><path id="SVGID_1_" d="M34 35.8h65.4v63.8H34z"/></defs><clipPath id="SVGID_2_"><use xlink:href="#SVGID_1_" overflow="visible"/></clipPath><g class="st0"><path class="st1" d="M66.8 99.6c18.1 0 32.7-14.3 32.7-31.9S84.8 35.8 66.8 35.8 34 50.1 34 67.7s14.7 31.9 32.8 31.9"/></g><path class="st2" d="M81.7 54.6l-1.9-1.9-13 13.1-13.1-13.1-1.9 1.9 13 13.1-13 13.1 1.9 1.9 13.1-13.1 13 13.1 1.9-1.9-13-13.1z"/></svg>'

  return <span dangerouslySetInnerHTML={{ __html: svgString }} />
}

export default FormErrorIcon
