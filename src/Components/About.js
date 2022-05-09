import React from 'react'
import David from '../Data/David.svg'
import { VscLocation } from 'react-icons/vsc'

function About() {
  return (
    <div id='about'>
        <h3 >About Me</h3>
        <VscLocation className='location'/>
        <p>Denver, CO</p>
        <div id='split'>
            <div>
                <p className='about-p'>Hello! My name is David Sands.</p>
                <p>I am an experienced Ruby on Rails and JavaScript based developer with a background in finance, software configuration, and HR for high-profile books of business containing Fortune 500 companies, including major tech companies. I am passionate about creative, data-based solutions, beautiful design, and process automation.</p>
            </div>
            <div>
                <img src={David}></img>
            </div>
        </div>
    </div>
  )
}

export default About