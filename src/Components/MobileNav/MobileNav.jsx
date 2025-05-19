import React from 'react'
import './MobileNav.css'
import Footer from '../Footer/Footer'

export default function MobileNav({isOpen, toggleMenu, sectionRefs}) {
    // const scrollToSection = (ref) => {
    //     ref.current.scrollIntoView({ behavior: 'smooth' });
    //   };
    const scrollToSection = (ref) => {
        // ref.current.scrollIntoView({ behavior: 'smooth' });
    
    
    
        const yOffset = -180; // Adjust this value as needed to fit your layout
        const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
      };
      
    
  return (
    <>


    <div 
    className={`mobile-menu ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        
        <div className='mobile-menu-container'>


  

<div className='img-a'>
        <img className='logo' src='./me.png' alt=''/>
        </div>
        <hr className='hr-img'/>
        <ul className='ul-text'>

  

            <li onClick={() => scrollToSection(sectionRefs.section4)}>
                <a className='menu-item'>Home</a>
            </li>

            <li onClick={() => scrollToSection(sectionRefs.section1)}>
                <a className='menu-item'>Skills</a>
            </li>
            <li onClick={() => scrollToSection(sectionRefs.section5)}>
                <a className='menu-item'>Projects</a>
            </li>

            <li onClick={() => scrollToSection(sectionRefs.section2)}>
                <a className='menu-item'>Work Exprience</a>
            </li>

            <li onClick={() => scrollToSection(sectionRefs.section3)}>
                <a className='menu-item'>Contact Me</a>
            </li>
           

          
        </ul>
        <hr className='hr-img'/>
        <a className='contact-btn' href='https://github.com/akshaywadhi/test/raw/main/AkshayWadhi.pdf' onClick={() => { }} download='akshaywadhi.pdf'>Download CV</a>
       
        <div>
        
        <footer className="foot">
                <p className='text'>© Akshay Wadhi</p>
            </footer>
        </div>
    </div> 
 
    </div>

  
    </>
  )
}
