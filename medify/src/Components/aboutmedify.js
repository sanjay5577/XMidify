import React from 'react'
import phone from "../assets/aboutmedify/phone.png";
import arrow from "../assets/aboutmedify/Vector (1).png";
import googeplay from "../assets/aboutmedify/google_play.png.png";
import applestore from "../assets/aboutmedify/apple_store.png.png";
import socialhandles from "../assets/aboutmedify/socialhandles.png";
import mobilecase from "../assets/aboutmedify/SeekPng 2.png";

import "./aboutmedify.css"

function Aboutmedify() {
  return (
    <div className='about-medify'>
        <div className='flex-container-mb'>
            <div className='mobile-container'>
                <div className='firstmobile'>
                <img  src={mobilecase} alt="phone" />
                <img  src={phone} alt="phone" className='actualphonedisplay'/>
                </div>
                
                <div className='secondmobile'>
                <img  src={mobilecase} alt="phone"  />
                <img  src={phone} alt="phone" className='actualphonedisplay'/>
                </div>
            </div>
            <div>
                <img  className='arrow' src={arrow} alt="phone"/>
                <span className="header-bn-big">Download the</span>
                <p className="header-bn-big medify-medify"><span className='hs-center-color'>Medify</span> App</p>
                <p className='linkdownload'>Get the link to download the app</p>
            
                <div className='flex-container'>
                    <div className='linkdownload extension-num'>+91</div>
                    <input  className='phone-number' placeholder='Enter phone number'/>
                    <button className="fd-search-btn">
                     Send SMS
                    </button>
                </div>
                <div className='store'>
                <img  src={googeplay} alt="googleplay-icon"/>
                <img  src={applestore} alt="applestore-icon"/>
                </div>
            </div>
                
            
        </div>
        <div className='socialhandle-links'>

        <div className='flex-container-mb'>
            <div>
                <img src= {socialhandles} alt ="socialhandles"/>
            </div>
            <div className='flex-container-mb about-links-main'>
                <ul className='about-links'>
                    <li>About us</li>
                    <li>Our Pricing</li>
                    <li>Our Gallery</li>
                    <li>Appointment</li>
                    <li>Privacy Policy</li>
                </ul>
                <ul className='about-links'>
                    <li>Orthology</li>
                    <li>Neurology</li>
                    <li>Dental care</li>
                    <li>Opthalmology</li>
                    <li>Cardiology</li>
                </ul>
                <ul className='about-links'>
                    <li>About us</li>
                    <li>Our Pricing</li>
                    <li>Our Gallery</li>
                    <li>Appointment</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
        </div>
        <p>Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Aboutmedify