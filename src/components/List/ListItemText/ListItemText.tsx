import Typography from '@/components/typography'
import React from 'react'
interface IListItemText{
    title?:any
    variant?:any,
    subText?:any
}
const ListItemText = ({ title,variant,subText }: IListItemText) => {
    const variantText=variant ? variant : "buttonText";
    return (
        <Typography variant={variantText}>
            {title}
            <Typography variant={variantText}>{subText}</Typography>
        </Typography>
    )
}

export default ListItemText