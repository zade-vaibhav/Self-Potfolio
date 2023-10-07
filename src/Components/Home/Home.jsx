import React from 'react'
import styles from "../../Styles/Home/home.module.css"
import Introduction from './Introduction'
import Skills from "./Skills"
import Projects from "./Projects"

const Home = () => {
  return (
    <div className={styles.container}>
    <Introduction/>
    <Skills/>
    <Projects/>
    </div>
  )
}

export default Home
