import React, {useState} from 'react'
import { VscMenu } from 'react-icons/vsc'
import { CgClose } from 'react-icons/cg'
// import { HashLink as Link } from 'react-router-hash-link';
import { Link } from "react-scroll"
import logo from '../Data/DS.svg'

function Navbar() {
  const [isChecked, setIsChecked] = useState(false)

  const handleChecked = () => {
      setIsChecked(!isChecked)
  }

  const handleCheckedFalse = () => {
      setIsChecked(false)
  }

  return (
    <header>
        <div id='header-container'>
        <Link
          to="circle-container"
          spy={true}
          smooth={true}
          offset={-160}
          duration={1000}
        >
          <img src={logo} alt="logo" id="logo"/>
        </Link>
          <nav>
              <input type="checkbox" id="check" checked={isChecked} onChange={handleChecked} />
              <label for="check">
                  <VscMenu id="button"/>
                  <CgClose id='cancel' />
              </label>
              <ul>
                  <li>
                    <Link
                      to="projects-container"
                      spy={true}
                      smooth={true}
                      offset={-120}
                      duration={1000}
                      onClick={handleCheckedFalse}
                    >
                    Projects
                    </Link>
                  </li>
                  <li >
                    <Link
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={-130}
                      duration={1000}
                      onClick={handleCheckedFalse}
                    >
                    About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="skills"
                      spy={true}
                      smooth={true}
                      offset={-130}
                      duration={1000}
                      onClick={handleCheckedFalse}
                    >
                    Skills
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="blogs-container"
                      spy={true}
                      smooth={true}
                      offset={-130}
                      duration={1500}
                      onClick={handleCheckedFalse}
                    >
                    Blog
                    </Link>
                  </li>
              </ul>
          </nav>
        </div>
    </header>
  )
}

export default Navbar