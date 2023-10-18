import React from 'react'
import styles from "../../Styles/Home/home.module.css"
import Introduction from './Introduction'
import Skills from "./Skills"
import Projects from "./Projects"
import Navbar from './Navbar'
import Contact from './Contact'
import Footer from './Footer'

const Home = () => {
  return (
    <div className={styles.container}>
      <Navbar/>
    <Introduction/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default Home
