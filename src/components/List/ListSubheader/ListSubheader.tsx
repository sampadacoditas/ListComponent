import React from 'react'
import styles from "./listSubHeader.module.scss"
const ListSubheader = ({component,children,customeStyle}:any) => {
  const Component=component ? component : "h3"
  const style=customeStyle? `${customeStyle} ${styles.listSubheader}` :`${styles.listSubheader}`
  return (
    <Component className={style}>
       {children}
    </Component>
  )
}

export default ListSubheader