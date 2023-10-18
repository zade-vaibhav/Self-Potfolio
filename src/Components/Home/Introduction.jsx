import React from 'react'
import styles from "../../Styles/Home/introduction.module.css"
import { Button,Typography,Container} from '@mui/material'
const color =[
  '#ff7f50','#87cefa','#da70d6','#32cd32','#6495ed',
  '#ff69b4','#ba55d3','#cd5c5c','#ffa500','#40e0d0'
];
const Introduction = () => {
  return (
    <div className={styles.container}>
      <div className={styles.intro_Container}>
        <Typography sx={{fontSize:"40px",fontWeight:900,textAlign:"left", letterSpacing:.5,color:'white',marginBottom:.5}}>Hi, I am</Typography>
        <Typography sx={{fontSize:"50px",fontWeight:900,textAlign:"left", letterSpacing:.5,color:'white',marginBottom:.5}}>Vaibhav Zade</Typography>
        <Typography sx={{fontSize:"30px",fontWeight:700,textAlign:"left", letterSpacing:.5,color:'white',marginBottom:.5}}>I am a Fullstack Web Devloper</Typography>
        <Typography sx={{fontSize:"20px",fontWeight:600,textAlign:"left", letterSpacing:.5,color:'white',marginBottom:"50px"}}>The Sun is the star at the center of the Solar System. It is a massive, hot ball of plasma, inflated and heated by nuclear fusion reactions at its core. Part of this internal energy is emitted from its surface as light, ultraviolet, and infrared radiation, providing most of the energy for life on Earth.</Typography>
        <Button sx={{background: color[Math.ceil(Math.random() * color.length)],color:"white",fontSize:"15px",fontWeight:600,padding:1}}>Check Resume</Button>
      </div>
      <div className={styles.introImage_Container}>
        <Container sx={{borderColor: color[Math.ceil(Math.random() * color.length)],border:"2",borderColor:color[Math.ceil(Math.random() * color.length)],height:"100%",width:"100%"}} className={styles.imageContainer}>
        </Container>
      </div>
    </div>
  )
}

export default Introduction
