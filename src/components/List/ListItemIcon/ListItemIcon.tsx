import React from 'react'
import styles from "./listItemIcon.module.scss"
interface IpropsListItemIcon{
  children?:any,
  onClick?:(event:any)=>void,
  customeStyle?:string,
  url?:string,
  imagestyling?:string
}
const ListItemIcon = ({children,onClick,customeStyle,url,imagestyling}:IpropsListItemIcon) => {
    const handleClick = (event:any) => {
        if (onClick) {
          onClick(event);
        }
      };
      const image = imagestyling ? `${styles.image} ${imagestyling}`: `${styles.image}`;
      const style = customeStyle ? `${styles.container} ${customeStyle}` : `${styles.container}`;
      return (
        <div
          onClick={handleClick}
          className={style}
        >
          { url ?(<><img src={url} alt="" className={image}/></> ):(<div className={image}>{children}</div>) }
        </div>
      )
}

export default ListItemIcon