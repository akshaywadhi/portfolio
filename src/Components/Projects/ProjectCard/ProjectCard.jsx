import React from 'react'
import './ProjectCard.css'


export default function ProjectCard({icon, title, link}) {


  return (
    <div className='project-icon'>
      <div className='project-icon-content'>
        <div>
<img src={icon} alt='photo'/>
<div className='techtitle'>
<p><a href={link} target='_blank'>Visit</a></p>

</div>

</div>
      </div>
    </div>
  )
}
