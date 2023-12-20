import React from 'react'
import styles from "./Badge.module.scss"
import cx from "classnames"

const Badge = ({title, size, variant}) => {
  return (
    <div className={cx(styles.wrapper, !!size && styles[`wrapper--size-${size}`], 
        !!variant && styles[`wrapper--variant-${variant}`] )}>
        <p className={styles.title}>{title}</p>
    </div>
  )
}

export default Badge