import React from 'react'
import List from '../List/List'
import ListItemButton from '../List/ListItemButton/ListItemButton'
import ListItemIcon from '../List/ListItemIcon/ListItemIcon'
import ListItemText from '../List/ListItemText/ListItemText'
import ListSubheader from '../List/ListSubheader/ListSubheader'
import { BiAdjust } from "react-icons/bi";
import styles from "./ListData.module.scss"
import { AiFillApple } from "react-icons/ai";
const data=[{data:<BiAdjust/>,title:"fname"},{data:<BiAdjust/>,title:"f1name"}]
const ListData = () => {
  return (
    <>
      <List subheader={
        <ListSubheader component="div">
          your list
        </ListSubheader>
      }>
        {
          data?.map((item: any) => {
            return (
              <ListItemButton onClick={(e: any) => console.log("sam")} >
                <ListItemIcon url={"https://imglarger.com/Images/before-after/ai-image-enlarger-1-after-2.jpg"} imagestyling={styles.image}>
                </ListItemIcon>
                <ListItemText title={item.title} />
              </ListItemButton>
            )
          })
        }
      </List>
      <List>
        <ListItemButton>
          <ListItemIcon imagestyling={styles.appleIcon}><AiFillApple /></ListItemIcon>
          <ListItemText title={"Apple"} />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon imagestyling={styles.appleIcon}><AiFillApple /></ListItemIcon>
          <ListItemText title={"Apple"} />
        </ListItemButton>
      </List>

    </>
  )
}

export default ListData