import React from 'react';
import './navbar.css';
import 'D:/SS_WebOps/ss/src/components/title/title.jsx';
import 'D:/SS_WebOps/ss/src/components/content/card.jsx';
import 'D:/SS_WebOps/ss/src/components/footer/footer.jsx';

function func()
{
    return(
    <div className="nav-container">
        <nav className="navbar navbar-expand-lg navbar-light bg-dark" >
        
        <a className="navbar-brand" href="#homey">
        <img src="https://www.thetruecolors.org/wp-content/uploads/2021/02/marvel-logo-header-1.jpg" width="70" height="30" className="d-inline-block align-top" alt=""/>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
        <li className="nav-item1">
          <a className="nav-link active" aria-current="page" href="#homey" style={{color:'white',fontWeight:'bold'}} > Home </a>
        </li>
        <li className="nav-item dropdown" id="drop">
          <a className="nav-link dropdown-toggle" href="#about" id="navbarDropdown" style={{color:'white',fontWeight:'bold'}} role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About
          </a>
          <ul className="dropdown-menu" id="dropdown" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#about">Action</a></li>
            <li><a className="dropdown-item" href="#about">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#about">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item3">
          <a className="nav-link active" aria-current="page" href="#contact" style={{color:'white',fontWeight:'bold'}}> Contact </a>
        </li>
        </ul>
        <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="You can search anything :)" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        </div>

        </nav>
    </div>
);
}

export default func;