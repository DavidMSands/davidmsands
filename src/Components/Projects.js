import React from 'react'
import anyssaLogo from '../Data/anyssa-logo.svg'
import corvidaetaLogo from '../Data/corvidaeta-logo.svg'
import twiddleLogo from '../Data/twiddlewakka-logo.svg'


function Projects() {
  return (
    <div id='projects-container'>
        <h2>Projects</h2>
        <section id='projects'>
            <ul>
                <li>
                    <a href="https://www.youtube.com/watch?v=7--S4N6RnwE" target="_blank" className='proj-a'><img src={corvidaetaLogo} className='logos'></img><br/></a>
                    <h3>Corvidaeta</h3>
                    <p>Web analytics solution designed for small to medium size sites.</p>
                    <p><i class="devicon-github-original colored"></i> <a href="https://github.com/DavidMSands/Corvidaeta" className='proj-link' target="_blank">Repo</a> | <a href="https://www.youtube.com/watch?v=7--S4N6RnwE" className='proj-link' target="_blank">Demo</a></p>
                    <i class="icon devicon-javascript-plain colored"></i>
                    <i class="icon devicon-react-original colored"></i>
                    <i class="icon devicon-ruby-plain colored"></i>
                    <i class="icon devicon-rails-plain colored"></i>
                    <i class="icon devicon-sqlite-plain colored"></i>
                    <i class="icon devicon-html5-plain colored"></i>
                    <i class="icon devicon-css3-plain colored"></i>
                    <i class="icon devicon-vscode-plain colored"></i>
                </li>
                <li>
                    <a href="https://github.com/DavidMSands/anyssa-sands" target="_blank" className='proj-a'><img src={anyssaLogo} className='logos'></img><br/></a>
                    <h3>anyssasands.com</h3>
                    <p>Photography portfolio website for professional photographer.</p>
                    <p><i class="devicon-github-original colored"></i> <a href="https://github.com/DavidMSands/anyssa-sands" className='proj-link' target="_blank">Repo</a> | <a href="https://anyssasands.com/" className='proj-link' target="_blank">Site</a></p>
                    <i class="icon devicon-javascript-plain colored"></i>
                    <i class="icon devicon-react-original colored"></i>
                    <i class="icon devicon-html5-plain colored"></i>
                    <i class="icon devicon-css3-plain colored"></i>
                    <i class="icon devicon-vscode-plain colored"></i>
                </li>
                <li>
                    <a href="https://github.com/jpena925/twiddle-wakka" target="_blank" className='proj-a'><img src={twiddleLogo} className='logos'></img><br/></a>
                    <h3>Twiddle-Wakka</h3>
                    <p>Social media platform designed for developers to showcase projects.</p>
                    <p><i class="devicon-github-original colored"></i> <a href="https://github.com/jpena925/twiddle-wakka" className='proj-link' target="_blank">Repo</a> | <a href="https://www.youtube.com/watch?v=vEjZURuZpLU" className='proj-link' target="_blank">Demo</a></p>
                    <i class="icon devicon-javascript-plain colored"></i>
                    <i class="icon devicon-react-original colored"></i>
                    <i class="icon devicon-ruby-plain colored"></i>
                    <i class="icon devicon-rails-plain colored"></i>
                    <i class="icon devicon-sqlite-plain colored"></i>
                    <i class="icon devicon-html5-plain colored"></i>
                    <i class="icon devicon-css3-plain colored"></i>
                    <i class="icon devicon-vscode-plain colored"></i>
                </li>
            </ul>
        </section>
    </div>
  )
}

export default Projects