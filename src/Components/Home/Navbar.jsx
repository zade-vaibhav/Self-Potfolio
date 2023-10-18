import React, { useState } from 'react'
import styles from "../../Styles/Home/navbar.module.css"
import { Typography } from '@mui/material'
import { AiFillGithub } from "react-icons/ai";

const Navbar = () => {
  const [screenSize, setscreenSize] = useState(true)
  window.addEventListener("resize", (e) => {
    console.log(e.target.screen.width)
    if (e.target.screen.width <= 670) {
      setscreenSize(false)
    } else {
      setscreenSize(true)
    }
  })
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img className={styles.logo_img} src="https://www.nextbigbox.in/wp-content/uploads/2022/11/portfolio-01.svg" alt='logo' />
      </div>

      {
        screenSize ? <div className={styles.navigation_button}>
          <Typography className={styles.nav_butt} href='#'>Home</Typography>
          <Typography className={styles.nav_butt} href='#'>Projects</Typography>
          <Typography className={styles.nav_butt} href='#'>Exprience</Typography>
          <Typography className={styles.nav_butt} href='#'>Contact</Typography>
        </div>
          :
          <div className={styles.sel_opt}>
            <select>
              <option>Home</option>
              <option>Projects</option>
              <option>Expreiences</option>
              <option>Contact</option>
            </select>
          </div>
      }

      <div >
        <button className={styles.contact_button}> <AiFillGithub/> Github</button>
      </div>
    </div>
  )
}

export default Navbar
