import React from 'react'
import styles from "../../Styles/Home/skills.module.css"
import Typography from '@mui/material/Typography'
import { Card } from '@mui/material'
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandJavascript } from "react-icons/tb";
import { BsFiletypeCss } from "react-icons/bs";
import { FcLibrary } from "react-icons/fc";
import { SiFramework7 } from "react-icons/si";



const color = ["#3366cc", "#dc3912", "#ff9900", "#109618", "#990099", "#0099c6", "#dd4477", "#66aa00", "#b82e2e", "#316395", "#3366cc", "#994499", "#22aa99", "#aaaa11", "#6633cc", "#e67300", "#8b0707", "#651067", "#329262", "#5574a6", "#3b3eac", "#b77322", "#16d620", "#b91383", "#f4359e", "#9c5935", "#a9c413", "#2a778d", "#668d1c", "#bea413", "#0c5922", "#743411"]
const Skills = () => {
  return (
    <div className={styles.container}>
      <div><h1 className={styles.skill_title}>SKILLS</h1></div>
      <div>
        <p className={styles.skill_desc}>{`I have work on wide range of projects in web apps. Here some of them`}</p>
      </div>
      <div className={styles.types}>
        <Typography sx={{ background: color[Math.ceil(Math.random() * color.length)], marginRight: 2, marginTop: 1, color: "white", border: "none", fontWeight: 600 }} className={styles.skill_type} >Frontend</Typography>
        <Typography sx={{ background: color[Math.ceil(Math.random() * color.length)], marginRight: 2, marginTop: 1, color: "white", border: "none", fontWeight: 600 }} className={styles.skill_type} >Backend</Typography>
        <Typography sx={{ background: color[Math.ceil(Math.random() * color.length)], marginRight: 2, marginTop: 1, color: "white", border: "none", fontWeight: 600 }} className={styles.skill_type} >Other's</Typography>
      </div>
      <div className={styles.skill_container}>
        {
          Array.from({ length: 3 }).map((ele, ind) =>
            <Card sx={{ background: ind % 2 === 0 ? "rgba(211, 211, 211,.5)" : "rgb(6, 6, 34)" }} className={styles.skill_card}>
              <div className={styles.card_title}>
                Frontend
              </div>
              <div className={ind % 2 === 0 ? styles.div2 : styles.div}>
                <Typography sx={{ borderColor: color[Math.ceil(Math.random() * color.length)], margin: 1, color: "white", fontWeight: 600 }} className={styles.skills} ><AiOutlineHtml5/>-HTML</Typography>
                <Typography sx={{ borderColor: color[Math.ceil(Math.random() * color.length)], margin: 1, color: "white", fontWeight: 600 }} className={styles.skills} ><BsFiletypeCss/> CSS</Typography>
                <Typography sx={{ borderColor: color[Math.ceil(Math.random() * color.length)], margin: 1, color: "white", fontWeight: 600 }} className={styles.skills} ><TbBrandJavascript/>-JavaScript</Typography>
                <Typography sx={{ borderColor: color[Math.ceil(Math.random() * color.length)], margin: 1, color: "white", fontWeight: 600 }} className={styles.skills} >Responsive Design</Typography>
                <Typography sx={{ borderColor: color[Math.ceil(Math.random() * color.length)], margin: 1, color: "white", fontWeight: 600 }} className={styles.skills} >CSS Flexbox</Typography>
                <Typography sx={{ borderColor: color[Math.ceil(Math.random() * color.length)], margin: 1, color: "white", fontWeight: 600 }} className={styles.skills} ><SiFramework7/>-Frameworks</Typography>
                <Typography sx={{ borderColor: color[Math.ceil(Math.random() * color.length)], margin: 1, color: "white", fontWeight: 600 }} className={styles.skills} ><FcLibrary/>-Librearies</Typography>
              </div>
            </Card>
          )

        }
      </div>
    </div>
  )
}

export default Skills
