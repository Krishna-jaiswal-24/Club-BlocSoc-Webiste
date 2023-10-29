import React from 'react'
import Logo from '../assests/Bloc.png'

const Navbar = () => {
  return (
    <div>
    <div class="container">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <img src={Logo} height={25}/>
      </a>

      <ul class="nav nav-pills ">
        <li class="nav-item"><a href="#" class="nav-link icon-link-hover text-white" aria-current="page">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link text-white">Projects</a></li>
        <li class="nav-item"><a href="#" class="nav-link text-white">Team</a></li>
        <li class="nav-item"><a href="#" class="nav-link text-white">Blogs</a></li>

      </ul>
    </header>
    </div>
    </div>
  )
}

export default Navbar