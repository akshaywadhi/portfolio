import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactFrom/ContactForm'

export default function ContactMe({ section }) {

     
   
  return (
   <section className='contact-container'  ref={section} data-aos='fade-up'>
    <h5>Contact Me</h5>
<div className='contact-content'>
    <div style={{flex: 1}}>
        <ContactInfoCard 
        iconUrl = './assets/img/gmail.webp'
        text= 'akshaywadhi.cs@gmail.com'/>

<ContactInfoCard 
        iconUrl = './assets/img/github.webp'
        text= 'https://github.com/akshaywadhi'/>
    </div>
    <div style={{flex: 1}}>
        <ContactForm/>
    </div>

</div>
   </section>
  )
}
