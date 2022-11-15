import React from 'react';
 
const  Header =()=>{
    return(
           <header>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <a class="navbar-brand" href="#">My React App</a>
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
              <a class="nav-link" href="#">
                <i class="fas fa-feather"></i>
                About
              </a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link" href="#">
                <i class="fa fa-dollar"></i>
                Pricing
              </a>
            </li>
          </ul>
    
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="fa fa-globe"></i>
                EN
              </a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link" href="#">
                <i class="fa fa-user"></i>
                Login
              </a>
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