import React from 'react'
import './Sidebar.css'
import vector3 from "../assets/vector3.png"
import vector2 from "../assets/vector2.png"
import vector1 from "../assets/vector1.png"

function Sidebar() {
  return (
      <div className="container-sidebar">
        <ul className="sidebar-ul">
          <li><img src={vector1} alt="" /><h2>Dashboard</h2></li>
          <li><img src={vector2} alt="" /><h2>Skill Test</h2></li>
          <li><img src={vector3} alt="" /><h2>Internship</h2></li>
        </ul>
      </div>
  )
    
}

export default Sidebar