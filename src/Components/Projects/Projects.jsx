import React, { useEffect } from 'react'
import './Projects.css'
import { PROJECTS } from '../../utils/data'
import ProjectCard from './ProjectCard/ProjectCard'
import "aos/dist/aos.css";
import Aos from 'aos';

export default function Projects({section}) {
  useEffect(()=> {
    Aos.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
    Aos.refresh();
  },[])
  return (
    <section className='project-container' ref={section} data-aos='fade-up'>
        <h5>Projects</h5>
        <div className='project-content'>
{
    PROJECTS.map((item,index) => (
        <ProjectCard key={item.id}  id={item.id} icon={item.icon} title={item.title} />
    ))
}
        </div>
    </section>
  )
}
