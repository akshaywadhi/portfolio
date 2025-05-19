import React from 'react'
import './ProjectCard.css'


export default function ProjectCard({icon, title}) {


  return (
    <div className='project-icon'>
      <div className='project-icon-content'>
        <div>
<img src={icon} alt='photo'/>
<div className='techtitle'>
<h2>{title}</h2>

</div>

</div>
      </div>
    </div>
  )
}
