import React from 'react'
import "./finddoctor.css"
import BookAppointment from "./bookappointment"
import locationmarker from "../assets/Location marker.png"
import hospital from "../assets/finddoctor/hospital.png"
import verified from "../assets/finddoctor/verified.1f87346e730e 1.png"
import success from "../assets/finddoctor/success.png"
import search from "../assets/Search.png";
import {useState ,useEffect} from "react"
import axios from "axios";

function Finddoctor({handlebookinglist}) {
    
    const[states, setStates] = useState([]);
    const[cities , setCities] = useState([]);
    const[centerdata , setCenterData] = useState([]);
    const[searchdata , setSearchData] = useState(
        {
            "state": "State",
            "city": "City"
        }
    );

    const[dateselected, setDateSelected] = useState("");
    const[timeselected, setTimeSelected] = useState("");


    useEffect(()=>{
        const fetch = async() =>{
            let statesdata = await performApiCallForStates();
             statesdata && setStates(statesdata);

        }
        
        fetch()
    } ,[])


    useEffect(()=>{
        performApiCallForcities()
        .then((data)=>{

            data && setCities(data);

        })
        .catch((e)=>{
            console.log(e)
        })
          
    } ,[searchdata.state])


  const performApiCallForStates = async()=>{

    try {
        let statesapidata  = await axios.get('https://meddata-backend.onrender.com/states');
    return statesapidata.data ;
      } catch (error) {
        console.log(error)
      }
  }

  const performApiCallForcities = async()=>{

    try {
        let citiesapidata  = await axios.get(`https://meddata-backend.onrender.com/cities/${searchdata.state}`);
    return citiesapidata.data ;
      } catch (error) {
        console.log(error)
      }
  }

  const handleSelect =(e)=>{
    setSearchData((values)=> ({...values , [e.target.name] : e.target.value}));

  }

  const handlesubmit = async(e)=>{
    e.preventDefault();
    
    let centerapidata  = await axios.get(`https://meddata-backend.onrender.com/data?state=${searchdata.state}&city=${searchdata.city}`);
    
    if(centerapidata.data){

        let filterdata =centerapidata.data.splice(0,5).map((item)=> ({...item,['appointmentbooked'] : false}));

        setCenterData(filterdata);

    }

  }

  

  const handleBooking =(id) =>{
    setCenterData(centerdata.map((item , index ) =>
    {
        if(index === id && item.appointmentbooked ===true){

            if(!dateselected)
            {
                alert("Please select the date!")
            }

            else if(!timeselected){
                alert("Please select the time!")
            }
            else{
                
                const details  ={
                    hospitalName : item["Hospital Name"],
                    city : item.City,
                    state : item.State,
                    time : timeselected,
                    date : dateselected
               }
               setDateSelected("");
                setTimeSelected("");
               handlebookinglist(details);
                return {...item , appointmentbooked : false}
            }

        }
        return index===id ? {...item , appointmentbooked : true} : item
    }
      
    ));
  }




  return (
    <div>
        <div className='selection-fd'></div>
        <div className='justaspace'></div>

            <form className='search-fd' onSubmit={handlesubmit}>
                <div className="fd-search-input">
                    <img src={locationmarker} alt='location marker'/>
                    <select  name ="state" value ={searchdata.state}  onChange ={handleSelect} className="fd-search-textinput" placeholder ="State" required>
                       <option  disabled selected>State</option>
                        {states && states.map((item) => <option>{item}</option>)}
                    </select >
                </div>
                <div className="fd-search-input">
                    <img src={locationmarker}  alt='location marker'/>
                    <select  name ="city" value ={searchdata.city}  onChange ={handleSelect} className="fd-search-textinput" placeholder ="City" >
                       <option  disabled selected>City</option>
                        {cities && cities.map((item) => <option>{item}</option>)}
                    </select >
                </div>
                <button className="fd-search-btn" type="submit">
                    <img className="searchbtn-icon" src={search} alt="search-icon"/>
                    Search
                </button>
            </form>

            <div className="fd-hospital-main">
            {centerdata.length !==0 &&  <>
                <p className='medicalcenteravailable'>{centerdata.length} medical centers available in {searchdata.state} </p>
                <div className='flex-container-verified'>
                    <img src={verified} alt="verified"/>
                <p>Book appointments with minimum wait-time & verified doctor details </p>
                </div>
                

                <div className="fd-hospital-container">
                 <div className="fd-hospital-list">

                {centerdata.map((item , index)=>{
                    return(
                        <>
                        <div key={index} className="hospital-list-container">
                            <img  src={hospital}  alt ="hospital-pic" className='hospital-pic'/>
                            <div className='hospital-details'>
                                <h5>{item["Hospital Name"]}</h5>
                                <p>{item.City} , {item.State}</p>
                                <p>Smilessence Center for Advanced Dentistry <br/>+ 1 more</p>
                                <div className='freeconsultation'>
                                 <div>
                                    <p>
                                        <span className='green-color'>FREE</span>
                                        ₹500 Consultation fee at clinic
                                    </p>
                                        <img src={success} alt="like"/>

                                </div>
                                <div>
                                     <p className='green-color'>Available Today</p>
                                     <button className="fd-search-btn" onClick={()=> handleBooking(index)}>Book FREE Center Visit</button>
                                </div>
                            </div>
                            </div>

                         </div>  
                            {item.appointmentbooked && (
                                <div className="carousel-container">
                                    <BookAppointment onDateSelect={setDateSelected}/>

                                    <div onClick={(e)=> setTimeSelected(e.target.textContent)}>
                                        <div  className='timings-flex'>
                                            <span> Morning </span>
                                            <div className='timings-inner-flex'>
                                            <button className='timings-button'>09.00 PM</button>
                                            <button className='timings-button'>09.30 AM</button>
                                            <button className='timings-button'>10.00 AM</button>
                                            <button className='timings-button'>10.30 AM</button>
                                            <button className='timings-button'>11.00 AM</button>
                                            <button className='timings-button'>11.30 AM</button>
                                            </div>
                                        </div>
                                        <div className='timings-flex' >
                                            <span > Afternoon </span>
                                            <div className='timings-inner-flex'>
                                            <button className='timings-button'>12.00 PM</button>
                                            <button className='timings-button'>12.30 PM</button>
                                            <button className='timings-button'>01.00 PM</button>
                                            <button className='timings-button'>01.30 PM</button>
                                            <button className='timings-button'>02.00 PM</button>
                                            <button className='timings-button'>02.30 PM</button>
                                            </div>
                                        </div>
                                        <div className='timings-flex'>
                                            <span> Evening </span>
                                            <div className='timings-inner-flex'>
                                            <button className='timings-button'>06.00 PM</button>
                                            <button className='timings-button'>06.30 PM</button>
                                            <button className='timings-button'>07.00 PM</button>
                                            <button className='timings-button'>07.30 PM</button>
                                            <button className='timings-button'>08.00 PM</button>
                                            <button className='timings-button'>08.30 PM</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        
                        </> 
                    )
                })}
                </div>
                <div className="fd-hospital-dentist-main">
                    Hiiiiii
                </div>
               </div>

            </>
            }

            </div>
    </div>
  )
}

export default Finddoctor