import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCaretDown, faCoffee, faCross, faTimes } from '@fortawesome/free-solid-svg-icons'

function Navbar() {  

    const[isMobile, setIsMobile] = useState(false)
    
    return (
        <div>
            <nav>
                <ul className = {isMobile ? 'navbar-mobile' : 'navbar'} id='navbar' >
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
                <button className="toggle" id='toggle' onClick={() => setIsMobile(!isMobile)}>
                    {isMobile ? <FontAwesomeIcon icon={faTimes}/> : <FontAwesomeIcon icon={faBars}/> }                   
                </button>
            </nav>
        </div>
    )
}

export default Navbar
