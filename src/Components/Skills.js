import React from 'react'
import { BsFillArrowUpSquareFill } from 'react-icons/bs'
import { Link } from "react-scroll"


function Skills({ deg }) {

  return (
    <div id='skills'>
      <h2 id='skills-head'>Skills</h2>
      <p>My languages, frameworks, and tools. . .</p>
      <div id='tools'>
        <div>
          <h3>Front-End</h3>
          <i class="skill devicon-javascript-plain colored"></i>
          <i class="skill devicon-react-original-wordmark colored"></i>
          <i class="skill devicon-html5-plain-wordmark colored"></i>
          <i class="skill devicon-css3-plain-wordmark colored"></i>
        </div>
        <div>
          <h3>Back-End</h3>
          <i class="skill devicon-ruby-plain-wordmark colored"></i>
          <i class="skill devicon-rails-plain-wordmark colored"></i>
          <i class="skill devicon-microsoftsqlserver-plain-wordmark colored"></i>
          <i class="skill devicon-sqlite-plain-wordmark colored"></i>
        </div>
        <div>
          <h3>Design</h3>
          <i class="skill devicon-figma-plain colored"></i>
          <i class="skill devicon-canva-original colored"></i> 
        </div>
        <div>
          <h3>Other</h3>
          <i class="skill devicon-github-original-wordmark colored"></i>
          <i class="skill devicon-vscode-plain-wordmark colored"></i>         
          <i class="skill devicon-npm-original-wordmark colored"></i>                          
        </div>
      </div>
      <Link
        to="projects-container"
        spy={true}
        smooth={true}
        offset={-120}
        duration={1000}
      >
        <BsFillArrowUpSquareFill className='arrow'/>
      </Link>
    </div>
  )
}

export default Skills