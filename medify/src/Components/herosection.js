import React from 'react'
import herosectionimg from "../assets/NicePng_doctor-png_336282 1.png"
import search from "../assets/Search.png";
import doctor from "../assets/Doctor.png";
import labs from "../assets/Drugstore.png";
import hospital from "../assets/Hospital.png";
import capsule from "../assets/Capsule.png";
import ambulance from "../assets/Ambulance.png";
import "./herosection.css"



function Herosection( {handleNavClick}) {
  return (
    <div className = "herosection">
        <div className ="hs-text-img">
            <div className ="hs-text">
                <p className ="hs-findonline">Skip the travel! Find Online
                 <br/>
                <span className="hs-medicalcenter">Medical <span className="hs-center-color">Centers</span></span>
                </p>
                <p className="hs-connect">
                Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.
                </p>

                <button className="hs-centerbtn">Find Centers</button>

            </div>
            <div className="hs-imgdiv">
            <img className="hs-img" src= {herosectionimg} alt="doctor pic" />
            </div>
        </div>
        

        <div className="hs-modal">
            <div className ="hs-search">
                <div className="hs-search-input" onClick={()=> handleNavClick("Find Doctors")}>
                    <img  src={search} alt="search-icon"/>
                    <input className="hs-search-textinput" type ="text" placeholder="State"/>
                </div>
                <div className="hs-search-input" onClick={()=> handleNavClick("Find Doctors")}>
                    <img  src={search} alt="search-icon"/>
                    <input className="hs-search-textinput" type ="text" placeholder="City"/>
                </div>
                <div className="hs-search-btn" onClick={()=> handleNavClick("Find Doctors")}>
                    <img  className="searchbtn-icon" src={search} alt="search-icon"/>
                    <p>Search</p>
                </div>
            </div>
            <div className ="hs-icons">
                <p className= "hs-icons-text">You may be looking for</p>
                <div className="hs-icons-flexbox">
                    <div className="hs-icons-item">
                        <img className="hs-icons-item-img" src={doctor} alt="doctor-icon" />
                        <p className="hs-icons-item-txt">Doctors</p>
                    </div>
                    <div className="hs-icons-item">
                        <img className="hs-icons-item-img"  src={labs} alt="doctor-icon" />
                        <p className="hs-icons-item-txt">Labs</p>
                    </div>
                    <div className="hs-icons-item">
                        <img className="hs-icons-item-img" src={hospital} alt="doctor-icon" />
                        <p className="hs-icons-item-txt">Hospitals</p>
                    </div>
                    <div className="hs-icons-item">
                        <img className="hs-icons-item-img" src={capsule} alt="doctor-icon" />
                        <p className="hs-icons-item-txt">Medical Store</p>
                    </div>
                    <div className="hs-icons-item">
                        <img className="hs-icons-item-img" src={ambulance} alt="doctor-icon" />
                        <p className="hs-icons-item-txt">Ambulance</p>
                    </div>
                </div>

            </div>

        </div>

    </div>
  )
}

export default Herosection