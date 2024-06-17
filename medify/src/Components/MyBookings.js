import React, { useEffect, useState } from 'react'
import "./MyBookings.css";
import search from "../assets/Search.png"
import hospital from "../assets/finddoctor/hospital.png"
import success from "../assets/finddoctor/success.png"

function MyBookings({bookingdetails}) {
    const[searchinputdata , setSearchInputData] = useState("");
    const[searchbookingdetails , setSearchBookingDetails] = useState(bookingdetails);

    const handleInputChange =(e)=>{
     setSearchInputData(e.target.value);
    }

    const handleSearch=()=>{

        const timer = setTimeout(()=>{
            
            if(searchinputdata === ""){
                setSearchBookingDetails(bookingdetails)
            }
            else{
                let filtereddata = bookingdetails.filter((item)=> item.hospitalName.toLocaleLowerCase().includes(searchinputdata.toLocaleLowerCase()));
            setSearchBookingDetails(filtereddata)

            }
            
        }, 2000);

        return()=> clearTimeout(timer)

    }

    
  return (
    <div>
        <div className='justaspace-booking'>
            <div className ='heading-booking'> 
            <span >My Bookings</span>
            </div>
             
             <div className='search-bookings'>
                <input  placeholder='Search by Hospital' className='fd-search-input' onChange={handleInputChange}/>
                <button className="fd-search-btn" onClick={handleSearch}>
                    <img className="searchbtn-icon" src={search} alt="search-icon"/>
                    Search
                </button>
             </div>
        </div>

        {searchbookingdetails.length !==0 ? (
            <> 
              <div className="fd-hospital-container">
                 <div className="fd-hospital-list">

                {searchbookingdetails.map((item , index)=>{
                    return(
                        <div key={index} className="hospital-list-container">
                            <img  src={hospital}  alt ="hospital-pic" className='hospital-pic'/>
                            <div>
                                <h5>{item.hospitalName}</h5>
                                <p>{item.city} , {item.state}</p>
                                <p>Smilessence Center for Advanced Dentistry<br/> + 1 more</p>
                                <img src={success} alt="like"/>
                            </div>
                            
                            <div>
            
                                        <p>{item.time}</p>
                                        <p>{ item.date}</p>
                            </div>
                            
                        </div>
                        
                    )
                })}
                </div>
                <div className="fd-hospital-dentist-main">
                    Hiiiiii
                </div>
               </div>
            </>

        ): (<p>Please Book the Visit</p>)}

    </div>
  )
}

export default MyBookings