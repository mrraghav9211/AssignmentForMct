import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
         <nav>
         <Link to="/">Home</Link>
          <br />
          <Link to="contect">Contact</Link>
          <br />
          <Link to="service">Service</Link>
         </nav>
    </div>
  )
}

export default Navbar