import React from 'react'
import blogsimage from "../assets/blogsnews/blogsnews.png";
import doctorimage from "../assets/blogsnews/doctor2-small.jpg.png";
import "./blogsnews.css"

function Blogsnews() {
  return (
    <div className='blognews'>
        <span className='header-bn'>Blog & News</span>
        <h1  className='header-bn-big'>Read Our Latest News</h1>
        <div className ="container-bn">
            <div className='innercontainer-bn'>
                <img src={blogsimage}  alt="blogsimage" />
                <p className='medicaldate'>Medical &emsp; March 31,2022</p>
                <p className='suggestion-bn'>6 Tips To Protect Your Mental Health When You’re Sick</p>
                <div className='suggestion-bn'>
                    <img  src={doctorimage}  alt="doctorimage"/>
                    <span className='doctorsname'>Rebecca Lee</span>
                </div>
            </div>
            <div className='innercontainer-bn'>
                <img src={blogsimage}  alt="blogsimage" />
                <p className='medicaldate'>Medical &emsp; March 31,2022</p>
                <p className='suggestion-bn'>6 Tips To Protect Your Mental Health When You’re Sick</p>
                <div className='suggestion-bn'>
                    <img  src={doctorimage}  alt="doctorimage"/>
                    <span className='doctorsname'>Rebecca Lee</span>
                </div>
            </div>
            <div className='innercontainer-bn'>
                <img src={blogsimage}  alt="blogsimage" />
                <p className='medicaldate'>Medical &emsp; March 31,2022</p>
                <p className='suggestion-bn'>6 Tips To Protect Your Mental Health When You’re Sick</p>
                <div className='suggestion-bn'>
                    <img  src={doctorimage}  alt="doctorimage"/>
                    <span className='doctorsname'>Rebecca Lee</span>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Blogsnews