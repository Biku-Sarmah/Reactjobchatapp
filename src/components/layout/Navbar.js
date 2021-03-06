import React from 'react'
import { Link } from 'react-router-dom'

 const Navbar = () => {
    return (
        <div>
            <nav class="navbar bg-dark">
      <h1>
        <Link to="/"><i class="fas fa-code"></i> Home</Link>
      </h1>
      <ul>
        <li><Link to="register">Register</Link></li>
        <li><Link to="login">Login</Link></li>
      </ul>
    </nav>
        </div>
      
    )
}

export default Navbar;
