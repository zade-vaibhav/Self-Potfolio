import React from 'react'
import styles from "../../Styles/Home/footer.module.css"
import { Typography } from '@mui/material'
import { AiFillGithub,AiOutlineLinkedin } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
      <img className={styles.logo_img} src="https://www.nextbigbox.in/wp-content/uploads/2022/11/portfolio-01.svg" alt='logo' />
      </div>
      <div>
      <div className={styles.navigation_button}>
          <Typography className={styles.nav_butt} href='#'>Home</Typography>
          <Typography className={styles.nav_butt} href='#'>Projects</Typography>
          <Typography className={styles.nav_butt} href='#'>Exprience</Typography>
          <Typography className={styles.nav_butt} href='#'>Contact</Typography>
        </div>
      </div>
      <div className={styles.i_container}>
          <div className={styles.icon_container}><AiFillGithub className={styles.icon}/></div>
          <div className={styles.icon_container}><AiOutlineLinkedin className={styles.icon}/></div>
          <div className={styles.icon_container}><BsInstagram className={styles.icon}/></div>
      </div>
    </div>
  )
}

export default Footer
