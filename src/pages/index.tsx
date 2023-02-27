import { CgProfile } from "react-icons/cg";
import { BiLogIn } from "react-icons/bi"
import { Inter } from 'next/font/google'
import styles from "../styles/app.module.scss"
import List from '@/components/List/List'
import ListSubheader from '@/components/List/ListSubheader/ListSubheader'
import ListItemButton from '@/components/List/ListItemButton/ListItemButton'
import ListItemIcon from '@/components/List/ListItemIcon/ListItemIcon'
import ListItemText from '@/components/List/ListItemText/ListItemText'
import { useState } from 'react'
import ListData from '@/components/ListData/ListData';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [users, setUsers] = useState<any>(
    [
      { dp: "https://wallpapers.com/images/hd/cool-neon-blue-profile-picture-u9y9ydo971k9mdcf.jpg", name: "payal" }
      , { dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfsfKy2-uWqyaA1eDQDY2T65JYOz_fI-GLsvLfH7OO02HFkMduHW47uXc0qDKVEb-ciH0&usqp=CAU", name: "sahil" },
      { dp: "https://wallpapers.com/images/hd/cool-neon-blue-profile-picture-u9y9ydo971k9mdcf.jpg", name: "payal" }
      , { dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfsfKy2-uWqyaA1eDQDY2T65JYOz_fI-GLsvLfH7OO02HFkMduHW47uXc0qDKVEb-ciH0&usqp=CAU", name: "sahil" },
      { dp: "https://wallpapers.com/images/hd/cool-neon-blue-profile-picture-u9y9ydo971k9mdcf.jpg", name: "payal" }
      , { dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfsfKy2-uWqyaA1eDQDY2T65JYOz_fI-GLsvLfH7OO02HFkMduHW47uXc0qDKVEb-ciH0&usqp=CAU", name: "sahil" },
      { dp: "https://wallpapers.com/images/hd/cool-neon-blue-profile-picture-u9y9ydo971k9mdcf.jpg", name: "payal" }
      , { dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfsfKy2-uWqyaA1eDQDY2T65JYOz_fI-GLsvLfH7OO02HFkMduHW47uXc0qDKVEb-ciH0&usqp=CAU", name: "sahil" },
      { dp: "https://wallpapers.com/images/hd/cool-neon-blue-profile-picture-u9y9ydo971k9mdcf.jpg", name: "payal" }
    ]);

  return (
    <div>
      {/* Styling is added externally */}
      <List subheader={
        <ListSubheader component="div">
          Nested List Items
        </ListSubheader>}>
        <ListItemButton onClick={(e: any) => console.log("onClick is clicked")} customeStyle={styles.ListItemButton} >
          <ListItemIcon customeStyle={styles.ListItemIcon} imagestyling={styles.listItemImageStyling} url={"data:image/jpeg;base64,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"} onClick={() => console.log("onClick is clicked on Icon")}>
          </ListItemIcon>
          <ListItemText title="Riya" variant="buttonText" subText={"Associate Software Enginner"} />
        </ListItemButton>
        <ListItemButton customeStyle={styles.ListItemButton}>
          <ListItemIcon customeStyle={styles.ListItemIcon}>
            <CgProfile />
          </ListItemIcon>
          <ListItemText title="Payal" variant="buttonText" subText={"Associate Software Enginner"} />
        </ListItemButton>
        <ListItemButton customeStyle={styles.ListItemButton}>
          <ListItemIcon imagestyling={styles.logout}>
            <BiLogIn />
          </ListItemIcon>
          <ListItemText title="Logout" variant="buttonText" />
        </ListItemButton>
      </List>
      <>
{/* Default Stayling are applied to Main */}
        <ListData />
      </>


    </div>
  )
}
