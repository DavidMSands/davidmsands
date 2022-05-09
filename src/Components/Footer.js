import React from 'react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { SiMedium } from 'react-icons/si'

function Footer() {
  return (
    <div id='footer'>
        <a href="mailto:davidmaxsands@gmail.com" >
            <p>davidmaxsands@gmail.com</p>
        </a>
        <div id='contact-icons'>
            <a href='https://www.linkedin.com/in/david-max-sands/' target="_blank"><AiFillLinkedin className='social-icon' /></a>
            <a href='https://medium.com/@davidmaxsands' target="_blank"><SiMedium className='social-icon' /></a>
            <a href='https://github.com/DavidMSands' target="_blank"><AiFillGithub className='social-icon' /></a>
        </div>
    </div>
  )
}

export default Footer