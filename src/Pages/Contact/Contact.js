import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';
import './contact.css';

const Contact = () => {

    const idLocation = useLocation();

    useEffect(() => {
        if (idLocation.hash) {
            const element = document.getElementById(idLocation.hash.substring(1));
            if(element) {
                element.scrollIntoView();
            }
        } else {
            window.scrollTo(0, 0)
        }
    }, [idLocation])

  return (
    <main className="contact">

      <section className="top-contact-bg">
        <div className="contact-start">
          <h1>Contact</h1>
          <p>Contact our friendly team and let us know how we can help you.</p>
        </div>
      </section>

      <h2>Get in touch with us</h2>
      <section className="second-contact">
        <artitle className="contact-bg" id='contact-id'>
          <div className="chat-contact">
            <h3><span><QuestionAnswerOutlinedIcon className='contact-icon' /></span> Chat to us</h3>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>info@hireacar.com</p>
          </div>

          <div className="visit-contact">
            <h3><span><BusinessOutlinedIcon className='contact-icon' /></span> Visit us</h3>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>Lorem Townfield <br /> DWE LS99 7TY</p>
          </div>

          <div className="call-contact">
            <h3><span><AddIcCallOutlinedIcon className='contact-icon' /></span> Call us</h3>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>0113 571 3173</p>
          </div>
        </artitle>

        <artitle className="right-contact">
          <div className="right-contact-bg">
           <h3>Created and Designed by Noorullah GM</h3>
          </div>
        </artitle>   
      </section>
      
    </main>
  )
}

export default Contact