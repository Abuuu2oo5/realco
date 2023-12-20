import React from 'react'
import styles from "./Work.module.scss"

const Work = ({icon, title, supTitle}) => {
  return (
    <div className={styles.wrapper}>
       <div className={styles.icon}>{icon}</div>
       <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.supTitle}>{supTitle}</p>
       </div>
    </div>
  )
}

export default Work