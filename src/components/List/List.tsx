import React, { HtmlHTMLAttributes } from 'react'
import Typography from '../typography'
import styles from './list.module.scss'
import ListItemButton from './ListItemButton/ListItemButton'
import ListItemIcon from './ListItemIcon/ListItemIcon'
interface IPropsList 
{
  subheader?: JSX.Element ,
  children?:any
}

const List = ({children,subheader}:IPropsList) => {
  return (
    <div className={styles.container}>
      <Typography variant="headline24">{subheader}</Typography>
      <div>
       {children}
      </div>
    </div>
  )
}

export default List