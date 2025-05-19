import React, { useEffect } from 'react';
import './Hero.css'
import AOS from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";

export default function Hero({ section}) {
    
    
    useEffect(() => {

        AOS.init({
          delay:20,
            duration: 1500, 
            easing: 'ease-in-out', 
        
        });
        AOS.refresh();},[])

  return (
    
  <section className='hero-container' ref={section}>
  


  
  <div className='svg-background'>
               <h1>HI</h1>
            </div>

    <div className='hero-content'>
   
        <h2>I am Akshay <div className='hero'><Typewriter
        
                onInit={(typewriter) => {
                    typewriter
                        .typeString("FullStack Developer")
                        .pauseFor(2500) 
                        .start();
                        
                }}

                options={{
                    loop: true,
                    delay: 150,
                    
                }}
            /> </div>  </h2>
<p>
    A Fullstack Developer | Passionate About Coding. I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people
</p>

<div className="ul-reset social-icons">
        <li>
          <a href="https://www.instagram.com/akshaywadhi" target='_blank'>
            <i aria-hidden="true" className="fa-brands fa-instagram fb2" />                    </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/akshaywadhi/" target='_blank'>
            <i aria-hidden="true" className="fab fa-linkedin-in fb2" />                    </a>
        </li>
        <li>
          <a href="https://x.com/?lang=en" target='_blank'>
            <i aria-hidden="true" className="fa-brands fa-x-twitter " />                    </a>
        </li>
        <li>
          <a href="https://github.com/akshaywadhi" target='_blank'>
            <i aria-hidden="true" className="fab fa-github " />                    </a>
        </li>
      </div>
    </div>
    <div className='hero-img'>
        <div>
          <div className='flexcol'>
        <div className='tech-icon' data-aos="fade-up">
            <img src='./assets/img/nodejs.webp' alt='' data-aos="fade-down"/>
        </div>
        <div className='tech-icon' data-aos="fade-up">
            <img src='./assets/img/mongo.webp' alt='' data-aos="fade-down"/>
        </div>
        <div className='tech-icon' data-aos="fade-up">
            <img src='./assets/react.svg' alt='' data-aos="fade-down"/>
        </div>
        </div>
        <img className='round' src='./assets/img/file2.webp' alt='' data-aos="fade-up" />
      
       
      
    </div>
    <div>
        <div className='tech-icon' data-aos="fade-up">
        <img src='./assets/img/js.webp' alt='' data-aos="fade-right"/>
        </div>
        <div className='tech-icon' data-aos="fade-up">
        <img src='./assets/img/css.webp' alt='' data-aos="fade-right"/>
        </div>
        <div className='tech-icon' data-aos="fade-up">
        <img src='./assets/img/html.webp' alt='' data-aos="fade-right"/>
        </div>
    </div>
    </div>

  </section>
  )
}
