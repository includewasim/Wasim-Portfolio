import React from 'react'
import styles from "./Footer.styles.module.css"

function Footer() {
  return (
    <section id='footer' className={styles.container}>
        <p>&copy; 2024 Wasim Khan. <br/>
        All rights reserved.
        </p>
    </section>
  )
}

export default Footer