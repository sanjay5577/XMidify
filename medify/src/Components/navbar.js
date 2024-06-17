import React from 'react'
import "./navbar.css";
import vectorimg from "../assets/Vector.png"

function Navbar({handleNavClick}) {
  return (
    <div className="navbar">
        <div className="medify-icontext" onClick={()=>handleNavClick("")}>
            <div className="vectorimg">
               <img   src={vectorimg} alt ="Medify-icon"/>
            </div>
            <p className="medify-text">Medify</p>
        </div>
        <div className="mcontainer">
            <div className="flex-item" onClick={()=>handleNavClick("Find Doctors")}>Find Doctors</div>
            <div className="flex-item">Hospitals</div>
            <div className="flex-item">Medicines</div>
            <div className="flex-item">Surgeries</div>
            <div className="flex-item">Software for Provider</div>
            <div className="flex-item">Facilities</div>
            <div className="flex-item bookings-btn" onClick={()=>handleNavClick("My Bookings")}>My Bookings</div>
        </div>
    </div>
  )
}

export default Navbar