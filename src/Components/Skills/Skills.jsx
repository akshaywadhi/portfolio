import React, { useState, useEffect} from 'react'
import './Skills.css'
import { SKILLS } from '../../utils/data'
import SkillCard from './SkillCard/SkillCard'
import SkillInfoCard from './SkillCard/SkillInfoCard/SkillInfoCard';
import AOS from "aos";
import "aos/dist/aos.css";

export default function Skills({ section }) {
  useEffect(() => {

    AOS.init({
        
        delay: 20,
        duration: 1000, 
        easing: 'ease-in-out', 
    });
    AOS.refresh();},[])

  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

  const handleSelectSkill = (data) => {
    setSelectedSkill(data)
  }


  return (
   <section className='skills-container' ref={section} data-aos='fade-up'>
    <h5>Technical Proficiency</h5>
    <div className='skills-content'>
        <div className='skills'>

          {SKILLS.map((item) => (
            <SkillCard key= {item.title}
            iconUrl= {item.icon}
            title = {item.title}
            isActive={selectedSkill.title === item.title}
            onClick={() => {
              handleSelectSkill(item)
            }}
            />
          ))}
        </div>
<div className='skills-info'>
<SkillInfoCard
heading={selectedSkill.title}
skills={selectedSkill.skills} />
</div>
    </div>
   </section>
  )
}
