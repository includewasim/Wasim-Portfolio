import React from 'react';
import styles from "./Contact.styles.module.css"

function Contact() {
  return (
    <section id="contact" className={styles.container}>
        <h1 className="sectionTitle">Contact</h1>
        <form action="">
            <div className='formGroup'>
                <label htmlFor='name' hidden>Name</label>
                <input type='text' placeholder='Name' name='name' id='name' required/>
            </div>
            <div className='formGroup'>
                <label htmlFor='email' hidden>E-mail</label>
                <input type='email' placeholder='E-mail' name='email' id='email' required/>
            </div>
            <div className='formGroup'>
                <label htmlFor='message' hidden>Message</label>
                <textarea type='text' placeholder='Message' name='message' id='message' required/>
            </div>
            <input type='submit' className='hover btn' value="Submit"/>
        </form>
    </section>
  )
}

export default Contact