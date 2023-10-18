import React from 'react'
import styles from "../../Styles/Home/contact.module.css"

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>GET IN TOUCH</h1>
      </div>
      <div className={styles.formContainer}>
         <form className={styles.form}>
          <label className={styles.label}>Name :</label>
          <input className={styles.input} placeholder='name'/>
          <label className={styles.label}>Email :</label>
          <input className={styles.input} placeholder='emial'/>
          <label className={styles.label}>Subject :</label>
          <input className={styles.input} placeholder='subject'/>
          <label className={styles.label}>Desvtiption :</label>
          <textarea className={styles.textArea} placeholder='descreption'></textarea>
          <button className={styles.submit}>submit</button>
         </form>
      </div>
    </div>
  )
}

export default Contact
