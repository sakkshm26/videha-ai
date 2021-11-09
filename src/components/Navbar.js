import React, {useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCoffee } from '@fortawesome/free-solid-svg-icons'

function Navbar() {  
    
    return (
        <div>
            <nav>
                <ul className='navbar'>
                    <li className='logo'>Videha AI</li>
                    <li className='list-item'>Home</li>
                    <li className='list-item'>Product</li>
                    <li className='list-item'>                    
                        <select className='dropdown'>
                            <option>Solutions</option>
                            <option>Finance</option>
                            <option>Healthcare</option>
                        </select>
                    </li>
                    <li className='list-item'>Resources</li>
                </ul>
                {/* <div className='responsive-navbar '>
                      <div className='nav-links'>
                        <li className='logo'>Videha AI</li>
                        <li className='list-item'>Home</li>
                        <li className='list-item'>Product</li>
                        <li className='list-item'>                 
                            <select className='dropdown'>
                              <option>Solutions</option>
                              <option>Finance</option>
                              <option>Healthcare</option>
                            </select>
                        </li>
                        <li className='list-item'>Resources</li>
                      </div>  
                        <span class="toggle">
                          <span class="bar"></span>
                          <span class="bar"></span>
                          <span class="bar"></span>
                        </span>
                </div> */}
            </nav>
        </div>
    )
}

export default Navbar
