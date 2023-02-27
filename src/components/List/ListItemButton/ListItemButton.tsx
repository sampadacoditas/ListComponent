import React from 'react';
import styles from "./listItemButton.module.scss"

interface IpropsListItemButton
{
    onClick?:(event:MouseEvent)=>void,
    children?:any,
    customeStyle?:string,
    onSelect?:(event:MouseEvent)=>void,
    onFocus?:(event:MouseEvent)=>void,
}
const ListItemButton = ({ onClick, children,customeStyle,onSelect,onFocus}:IpropsListItemButton) => {
  
  const handleClick = (event:any) => {if (onClick) {onClick(event);}};
  const handleOnSelect=(event:any)=>{if(onSelect){onSelect(event)}}
  const handleFocus=(event:any)=>{if(onFocus){onFocus(event)}}
const style = customeStyle ? `${customeStyle}` : `${styles.Button}`;
  return (
    <div
      onClick={handleClick}
      className={style}
      onSelect={handleOnSelect}
      onFocus={handleFocus}
    >
      {children}
    </div>
  );
};

export default ListItemButton;