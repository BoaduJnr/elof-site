import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  const [open, setOpen] = useState(false)
  return (
    <nav className='nav'>
       <h1 className="
         logo">Elof's Made</h1>
        <ul className={open ? "nav-links active" : "nav-links"}>
           
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/Gallery">Gallery</Link></li>
            <li><Link to="/Services">Services</Link></li>
            <li><Link to="/Contacts">Contacts</Link></li>
            <li><Link to="/AboutUs">About Us</Link></li>
            
            
            
        </ul>
            <i className={open ? "fas fa-bars close" : "fas fa-bars open" } onClick = {()=> setOpen(true)}></i>
            <i className={open ? "fas fa-times open" : "fas fa-times close" } onClick = {()=> setOpen(false)}></i>
    </nav>
  )
}

export default Nav