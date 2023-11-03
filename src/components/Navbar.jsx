import React from 'react'
import Logo from '../assests/Bloc.png'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div class="container">
        <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <img src={Logo} height={25} alt="Logo" />
          </Link>

          <ul class="nav nav-pills ">
            <li class="nav-item"><Link to="/" className="nav-link icon-link-hover text-white" aria-current="page">Home</Link></li>
            <li class="nav-item"><a href="#" class="nav-link text-white">Projects</a></li>
            <li class="nav-item"><Link to="/team" className="nav-link text-white">Team</Link></li>
            <li class="nav-item"><Link to="/blogs" class="nav-link text-white">Blogs</Link></li>
            <li class="nav-item"><Link to="/events" class="nav-link text-white">Events</Link></li>
            
          </ul>
        </header>
      </div>
    </div>
  )
}

export default Navbar