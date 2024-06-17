import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./bookappointment.css"
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import {Navigation, Scrollbar}  from 'swiper/modules';
import SwiperCore from 'swiper';
import { format, addDays, isToday, isTomorrow } from 'date-fns';

// Install Swiper modules
SwiperCore.use([Navigation, Scrollbar]);

const BookAppointment = ({ onDateSelect }) => {
    // Function to generate an array of dates starting from today
    const generateDates = (numDays) => {
        const dates = [];
        for (let i = 0; i < numDays; i++) {
            dates.push(addDays(new Date(), i));
        }
        return dates;
    };

    const dates = generateDates(10); // Generate dates for the next 10 days

    const handleDateClick = (date) => {
        console.log(date);
        onDateSelect(format(date, 'd MMM yyyy'));
    };

   

    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            navigation
            scrollbar={{ draggable: true }}
            style={{ padding: '0 30px' }} // Add padding to make space for arrows
            className="my-swiper-container"
        >
            {dates.map((date, index) => {
                let label;
                if (isToday(date)) {
                    label = 'Today';
                } else if (isTomorrow(date)) {
                    label = 'Tomorrow';
                } else {
                    label = format(date, 'EEE, d MMMM'); // Day of the week and date
                }
                return (
                    <SwiperSlide key={index} onClick={() => handleDateClick(date)}>
                        <div style={{ textAlign: 'center', cursor: 'pointer' }}>
                            <h3>{label}</h3>
                            <p className='green-color'> 15 slots available</p>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default BookAppointment;
