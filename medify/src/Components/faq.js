import React from 'react'
import faqdoctorimg  from "../assets/faq/faqdoctor.png";
import faqheartimg  from "../assets/faq/faqheart.png";
import "./faq.css"

function Faq() {
  return (
    <div className='faq-main'>
        <p className='header-bn'>Get Your Answer</p>
        <h1 className='header-bn-big'>Frequently Asked Questions</h1>
        <div className='flex-container'>
            <div className='img-doctor'>
                 <img  src={faqdoctorimg} alt="faqdoctor"/>
                 <div className='doctorheart'>
                 <img  src={faqheartimg}  alt="faqheart" />
                 </div>
            </div>
            <div className='faq-flex-container'>
                <div className='faq-flex-container-inner'>
                    <p className='faq-flex-para'>Why choose our medical for your family?</p>
                    <span className='faq-flex-expand'>+</span>
                </div>
                <div className='faq-flex-container-inner'>
                    <p className='faq-flex-para'>Why we are different from others?</p>
                    <span className='faq-flex-expand'>+</span>
                </div>
                <div className='faq-flex-container-inner'>
                    <p className='faq-flex-para'>Trusted & experience senior care & love</p>
                    <span className='faq-flex-expand'>+</span>
                </div>
                <div className='faq-flex-container-inner'>
                    <p className='faq-flex-para'>How to get appointment for emergency cases?</p>
                    <span className='faq-flex-expand'>+</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Faq