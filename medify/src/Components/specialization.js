import React from 'react'
import laboratory from "../assets/Drugstore.png"
import bloodsample from "../assets/Specialization/Blood Sample.png"
import heartratemonitor from "../assets/Specialization/Heart Rate Monitor.png"
import heartrate from "../assets/Specialization/Heart Rate.png"
import immune from "../assets/Specialization/Immune.png"
import stethoscope from "../assets/Specialization/Stethoscope.png"
import xray from "../assets/Specialization/X-Ray.png"

import "./specialization.css"

function Specialization() {
  return (
    <div className="specialization">
        <p className="spez-header">Find By Specialization</p>
        <div className="spez-flexbox"> 
                <div className="spez-flexbox-item">
                    <img className="spez-flexbox-img" src={laboratory} alt="doctor-icon" />
                    <p className="spez-flexbox-text">Dentistry</p>
                </div>
                <div className="spez-flexbox-item">
                    <img className="spez-flexbox-img" src={stethoscope} alt="doctor-icon" />
                    <p className="spez-flexbox-text">Primary Care</p>
                </div>
                <div className="spez-flexbox-item">
                    <img className="spez-flexbox-img" src={heartrate} alt="doctor-icon" />
                    <p className="spez-flexbox-text">Cardiology</p>
                </div>
                <div className="spez-flexbox-item">
                    <img className="spez-flexbox-img"src={heartratemonitor} alt="doctor-icon" />
                    <p className="spez-flexbox-text">MRI Resonance</p>
                </div>
                <div className="spez-flexbox-item">
                    <img className="spez-flexbox-img" src={bloodsample} alt="doctor-icon" />
                    <p className="spez-flexbox-text">Blood Test</p>
                </div>
                <div className="spez-flexbox-item">
                    <img src={immune} alt="doctor-icon" />
                    <p className="spez-flexbox-text">Piscologist</p>
                </div>
                <div className="spez-flexbox-item">
                    <img className="spez-flexbox-img" src={laboratory} alt="doctor-icon" />
                    <p className="spez-flexbox-text">Laboratory</p>
                </div>
                <div className="spez-flexbox-item">
                    <img className="spez-flexbox-img"  src={xray} alt="doctor-icon" />
                    <p className="spez-flexbox-text">X-Ray</p>
                </div>
        </div>
        <button className="spez-view-btn">View All</button>
        
    </div>
  )
}

export default Specialization;