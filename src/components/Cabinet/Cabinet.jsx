import React from 'react'
import styles from "./Cabinet.module.scss"

const Cabinet = ({icon, title, supTitle}) => {
  return (
    <div className={styles.wrapper}>
       <img src={icon} alt="people" />
       <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.supTitle}>{supTitle}</p>
       </div>
    </div>
  )
}

export default Cabinet