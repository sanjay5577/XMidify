
import hendryhaul from "../assets/Specialist/dr_henryhull.png.png"
import ahmadkhan from "../assets/Specialist/dr_ahmadkhan.png"
import heenasachdeva from "../assets/Specialist/dr_heenasachdeva.png"
import ankursharma from "../assets/Specialist/dr_ankursharma.png"
import  noname from "../assets/Specialist/dr_noname.png"


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Specialist.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
     <h1 className="specialist-heading">Our Medical Specialist</h1>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="my-Swiper"
      >
        
        <SwiperSlide className="specialist-slide">
            <div>
                <img className="specialist-img" src={hendryhaul} alt="doctor-icon" />
                <p className="specialist-name">y Hull</p>
                <p className="specialist-designation">ne</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className="specialist-slide">
           <div >
                <img className="specialist-img" src={ahmadkhan} alt="doctor-icon" />
                <p className="specialist-name">Dr. Ahmad Khan</p>
                <p className="specialist-designation">Neurologist</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className="specialist-slide">
            <div>
                <img className="specialist-img" src={heenasachdeva} alt="doctor-icon" />
                <p className="specialist-name">Dr. Heena Sachdeva</p>
                <p className="specialist-designation">Orthopedics</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className="specialist-slide">
            <div>
                <img className="specialist-img" src={ankursharma} alt="doctor-icon" />
                <p className="specialist-name">Dr. Ankur Sharma</p>
                <p className="specialist-designation">Medicine</p>
            </div>
            </SwiperSlide>
        <SwiperSlide className="specialist-slide">
            <div>
                <img className="specialist-img" src={noname} alt="doctor-icon" />
                <p className="specialist-name">Dr No Name</p>
                <p className="specialist-designation">ACB</p>
                
            </div>
        </SwiperSlide>
        <SwiperSlide className="specialist-slide">
            <div>
                <img className="specialist-img" src={ankursharma} alt="doctor-icon" />
                <p className="specialist-name">Dr. Ankur Sharma</p>
                <p className="specialist-designation">Medicine</p>
            </div>
            </SwiperSlide>
      </Swiper>
    </>
  );
}
