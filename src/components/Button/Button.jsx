import React from 'react'
import styles from "./Button.module.scss"
import cx from 'classnames'

const Button = ({title, size, icon, variant}) => {
  return (
    <div className={cx(styles.wrapper, !!size && styles[`wrapper--size-${size}`],
      !!variant && styles[`wrapper--variant-${variant}`])}>
       <div>{icon}</div>
       <p className={styles.title}>{title}</p>
    </div>
  )
}

export default Button