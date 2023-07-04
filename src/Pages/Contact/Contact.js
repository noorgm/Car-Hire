import React from 'react';

import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';
import './contact.css';

const Contact = () => {
  return (
    <main className="contact">
      <div className="contact-start">
        <h1>Contact</h1>
        <p>Contact our friendly team and let us know how we can help you.</p>
      </div>
      <div className="contact-main container">
        <div className="contact--left">
            <div className="contact-box">
                <div className="contact-icon">
                  <QuestionAnswerOutlinedIcon />
                </div>
                <div className="contact-below-icon">
                    <h1>Chat to us</h1>
                    <p>Lorem ipsum, dolor sit amet adipisicing.</p>
                    <p>loreme@gmail.com</p>
                </div>                
            </div>
            <div className="contact-box-one">
                <div className="contact-icon">
                    <BusinessOutlinedIcon />
                </div>
                <div className="contact-below-icon">
                    <h1>Visit us</h1>
                    <p>Lorem ipsum, dolor sit amet adipisicing.</p>
                    <p>Lorem Townfield DWE LS99 7TY</p>
                </div>                   
            </div>
            <div className="contact-box-two">
                <div className="contact-icon">
                    <AddIcCallOutlinedIcon />
                </div>
                <div className="contact-below-icon">
                    <h1>Call us</h1>
                    <p>Mon-Sun Anytime Of the week</p>
                    <p>0113 571 3173</p>
                </div>
            </div>
         </div>

        <div className="contact-right-bg">
            <div className="contact-right-btop">
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus neque autem reprehenderit, voluptate saepe sint repellendus dolore aut molestias nobis, unde sit consequatur!</h3> 
            </div>           
            <div className="contact-right-bottom">
                <h3>Noorullah GM</h3> 
                <div>
                    <h3>Company Logo</h3>
                </div>
            </div>
        </div>

      </div>
    </main>
  )
}

export default Contact