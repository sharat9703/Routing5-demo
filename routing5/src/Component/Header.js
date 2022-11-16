import React from 'react';
import { Link } from 'react-router-dom';
 
const  Header =()=>{
    return(
           <header>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <Link class="navbar-brand" to="#">My React App</Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
    
        <div class="collapse navbar-collapse " id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <Link class="nav-link" to="#">
                <i class="fas fa-feather"></i>
                About
              </Link>
            </li>
            <li class="nav-item dropdown">
              <Link class="nav-link" to="#">
                <i class="fa fa-dollar"></i>
                Pricing
              </Link>
            </li>
          </ul>
    
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link" to="#">
                <i class="fa fa-globe"></i>
                EN
              </Link>
            </li>
            <li class="nav-item dropdown">
              <Link class="nav-link" to="#">
                <i class="fa fa-user"></i>
                Login
              </Link>
            </li>
            <li class="nav-item">
              <button class="btn bg-white nav-link text-dark">
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    )
}

export default Header;