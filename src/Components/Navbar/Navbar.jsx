import React, { useState } from 'react'
import './Navbar.css'
import MobileNav from '../MobileNav/MobileNav';
import { scrollToSection } from '../Scroll';

export default function Navbar({sectionRefs}) {

    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    };




  


const scrollToSection = (ref) => {
    // ref.current.scrollIntoView({ behavior: 'smooth' });



    const yOffset = -250; // Adjust this value as needed to fit your layout
    const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top: y, behavior: 'smooth'});
  };
  
    return (
        <>
        <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} sectionRefs={sectionRefs} scrollToSection={scrollToSection} />
        

            
            <nav className='nav-wrapper'>
                <div className='nav-content'>
                    <div className='logo-email'>
                    <img className='logo' src='./me.png'/>
                    </div>
                    <ul>
                        <li onClick={() => scrollToSection(sectionRefs.section4)}>
                            <a className='menu-item'>Home</a>
                        </li>
                        <li onClick={() => scrollToSection(sectionRefs.section1)} >
                            <a className='menu-item'>Skills</a>
                        </li>
                        <li onClick={() => scrollToSection(sectionRefs.section5)}>
                            <a className='menu-item'>Projects</a>
                        </li>
                        <li onClick={() => scrollToSection(sectionRefs.section2)}>
                            <a className='menu-item'>Work Experience</a>
                        </li>
                        <li onClick={() => scrollToSection(sectionRefs.section3)}>
                            <a className='menu-item' >Contact Me</a>
                        </li>
                        <a className='contact-btn' href='https://github.com/akshaywadhi/test/raw/main/AkshayWadhi.pdf' onClick={() => { }} download='akshaywadhi.pdf'>Download CV</a>
                    </ul>
                    <button className='menu-btn' onClick={toggleMenu}>
                        <span className={'material-symbols-outlined'}
                            style={{ fontSize: '1.8rem' }}>
                            {openMenu ? 'close' : 'menu'}
                        </span>

                    </button>
                </div>
            </nav>

        
                    </>
    )
}
