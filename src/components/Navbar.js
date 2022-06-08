import React from 'react'

import User from "../assets/user.png"
import logo from "../assets/logo.PNG"

function Navbar() {
  return (
    <div className="navbar-container d-flex justify-content-between m-auto px-5 py-2" style={{borderBottom: "1px solid #EBF0F5"}} >
    <div><h2>c<span><img src={logo} alt="" style={{width: "19px", height: "23px"}} /></span>vette</h2></div>
    <div className="navbar-user dflex justify-content-between">
    <button type="button" className="btn btn-outline-secondary d-flex justify-content-between " style={{backgroundColor:"#fff",color:"#000"}}>
      <img src={User} alt="" />
      <p className="mb-0 px-1">Siddharth Jain</p>
    </button>
    </div>
  </div>
  )
}

export default Navbar