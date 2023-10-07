import React, { useState } from 'react'
import styles from "../../Styles/Home/projects.module.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const color = ["#3366cc", "#dc3912", "#ff9900", "#109618", "#990099", "#0099c6", "#dd4477", "#66aa00", "#b82e2e", "#316395", "#3366cc", "#994499", "#22aa99", "#aaaa11", "#6633cc", "#e67300", "#8b0707", "#651067", "#329262", "#5574a6", "#3b3eac", "#b77322", "#16d620", "#b91383", "#f4359e", "#9c5935", "#a9c413", "#2a778d", "#668d1c", "#bea413", "#0c5922", "#743411"]
const Projects = () => {
  console.log(color)
  return (
    <div className={styles.container}>

      <div><h1 className={styles.project_title}>PROJECTS</h1></div>
      <div>
        <p className={styles.project_desc}>{`I have work on wide range of projects in web apps. Here some of them`}</p>
      </div>
      <div>
        <Typography sx={{ background: color[Math.ceil(Math.random() * color.length)], marginBottom: 2, color: "white", border: "none", fontWeight: 600 }} className={styles.project_type} >WEB App's</Typography>
      </div>

      <div className={styles.projects_container}>

        {
          Array.from({ length: 4 }).map((ele, ind) =>
            <Card sx={{ maxWidth: 345, padding: 1, marginLeft: 1, marginRight: 1, marginBottom: 2, background: "none", border: .5, borderColor: 'gray', backgroundColor: ind % 2 == 0 ? "none" : "rgba(211, 211, 211,.5)" }}>
              <CardMedia
                sx={{ height: 160, border: 1, borderRadius: 1 }}
                image="https://www.anscommerce.com/blog/wp-content/uploads/2022/04/Social-Commerce-1024x576.png"
                title="Q-kart"
              />
              <CardContent>
                <Typography sx={{ color: ind % 2 == 0 ? "white" : "lightgray" }} gutterBottom variant="h5" component="div">
                  Q-kart
                </Typography>
                <Typography sx={{ color: ind % 2 == 0 ? "white" : "lightgray" }} variant="body2" color="text.secondary">
                  QKart is an e-commerce application offering a variety of products for customers to choose from.
                </Typography>
                <div className={styles.skills_but}>
                  <Button variant="outlined" size="small" sx={{ minWidth: 3, minHeighy: 1, marginRight: .5, background: color[Math.ceil(Math.random() * color.length)], color: "white", border: "none", fontWeight: 600 }}>HTML</Button>
                  <Button variant="outlined" size="small" sx={{ minWidth: 3, minHeighy: 1, marginRight: .5, background: color[Math.ceil(Math.random() * color.length)], color: "white", border: "none", fontWeight: 600 }}>CSS</Button>
                  <Button variant="outlined" size="small" sx={{ minWidth: 3, minHeighy: 1, marginRight: .5, background: color[Math.ceil(Math.random() * color.length)], color: "white", border: "none", fontWeight: 600 }}>JS</Button>
                  <Button variant="outlined" size="small" sx={{ minWidth: 3, minHeighy: 1, marginRight: .5, background: color[Math.ceil(Math.random() * color.length)], color: "white", border: "none", fontWeight: 600 }}>BOOTSTRAP</Button>
                  <Button variant="outlined" size="small" sx={{ minWidth: 3, minHeighy: 1, marginRight: .5, background: color[Math.ceil(Math.random() * color.length)], color: "white", border: "none", fontWeight: 600 }}>...</Button>
                </div>
              </CardContent>
              <CardActions>
                <Button sx={{ border: 1, borderColor: "gray", padding: 1, color: "white" }} size="small">View Project details</Button>
              </CardActions>
            </Card>

          )
        }


      </div>
    </div>
  )
}

export default Projects
