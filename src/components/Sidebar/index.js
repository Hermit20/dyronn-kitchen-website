import './index.scss'
import {Link, NavLink} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar' to='/'>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
            <div className="pill-button">About</div>
            </NavLink>
            <NavLink 
            exact="true" 
            activeclassname="active" 
            className= "foundersnote-link" 
            to="/foundersnote"
            >
               <div className="pill-button">Founder's Note</div>
            </NavLink>
            <NavLink 
            exact="true" 
            activeclassname="active" 
            className= "order-link" 
            to="/order"
            >
                <div className="pill-button">Order</div>
            </NavLink>
            <NavLink 
            exact="true" 
            activeclassname="active" 
            className= "gallery-link" 
            to="/gallery"
            >
                <div className="pill-button">Gallery</div>
            </NavLink>
        </nav>
        
    </div>
  
)

export default Sidebar