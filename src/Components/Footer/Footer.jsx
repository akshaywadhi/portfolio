import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='copy'>
     <h3>Copyright &copy; akshaywadhi</h3> 
      </div>
    


      <div className='links-container'>

<div className='links'>
  <li className='fb'>
  <i className="fab fa-facebook-f" />
  </li>
  <li>
  <i className="fab fa-linkedin-in" />
  </li>
  <li>
  <i className="fa-brands fa-x-twitter" />
  </li>
  <li>
  <i className="fab fa-github" />
  </li>

</div>

<div className='langs'>
<a href="https://getbootstrap.com/" target='_blank'>BOOTSTRAP</a> | <a href='https://developer.mozilla.org/en-US/docs/Web/HTML' target='_blank'>HTML</a> | <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target='_blank'>JAVASCRIPT</a> | <a href='https://developer.mozilla.org/en-US/docs/Web/CSS' target='_blank'>CSS</a> | <a href='https://mui.com/' target='_blank'>MUI</a> | <a href='https://react.dev/' target='_blank'>REACT</a>
</div>

      </div>
    </div>
  )
}
