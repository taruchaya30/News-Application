import React  from 'react'
import {Link}from "react-router-dom";
const NavBar=()=>{
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light ">
  <div className="container-fluid">
    <h1><Link className="navbar-brand" to="/general">Heading Hub<sub>.com</sub></Link></h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="subheading" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link " to="/business">Business</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/science">Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/technology">Technology</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/entertainment">Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/health">Health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/sports">Sports</Link>
        </li>
        
       </ul>
    </div>
  </div>
</nav>
      </div>
    )
  }
export default NavBar
