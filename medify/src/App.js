import Navbar from "./Components/navbar.js"
import Herosection from "./Components/herosection"
import Specialization from "./Components/specialization"
import Specialist from "./Components/Specialist"
import './App.css';
import Swiper from "./Components/swiper.js";
import Finddoctor from "./Components/finddoctor";
import MyBookings from "./Components/MyBookings.js";
import { useState } from "react";
import Blogsnews from "./Components/blogsnews.js";
import Faq from "./Components/faq.js";
import Aboutmedify from "./Components/aboutmedify.js";

function App() {
  const[navbarselected  , setNavbarSelected] = useState("");
  const[bookingdetails , setBookingDetails]=  useState([])

  const handleBookingList =(data)=>{
    setBookingDetails([...bookingdetails , data]);
  }



  return (
    <div className="App">
       <div className ="header">
        <div className="marquee">
        <p className="header-text">The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.</p>
      </div>
       </div>

       <Navbar handleNavClick ={setNavbarSelected}/>
       {!navbarselected ? 
       (
         <>
            <Herosection handleNavClick ={setNavbarSelected}/>
          <Swiper />
          <Specialization />
          <Specialist />
          <Blogsnews />
       </>
        
       ) : (
        <>
          {navbarselected === "Find Doctors" ? <Finddoctor handlebookinglist ={handleBookingList} />
          :<MyBookings  bookingdetails={bookingdetails}/>}
        </>
       )}
       
       
       <Faq />
       <Aboutmedify />
    </div>
  );
}

export default App;
