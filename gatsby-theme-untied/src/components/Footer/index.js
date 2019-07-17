import React from 'react'

import styles from './styles.module.styl'

const Footer = () => (
  <div className={styles.footerContainer}>
    <footer>
      <div className={styles.brand}>Gatsby Theme Untied</div>
      <div className={styles.copyright}>&copy; 2018</div>
    </footer>
  </div>
)

export default Footer
