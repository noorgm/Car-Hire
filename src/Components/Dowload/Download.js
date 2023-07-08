import React from 'react';

import google from '../../Assets/images/download-google.png';
import apple from '../../Assets/images/download-apple.png';
import phone from '../../Assets/images/app.png'
import './download.css';

const Download = () => {
  return (
    <section className="download-bg grid">
      <div className="download-left">
        <h2>Hire a car with few clicks only</h2>
        <p>You can download our app and then right away with few clicks you will be able to hire a car with us.</p>
      </div>
      <div className="download-store">
        <a href='https://play.google.com/store/apps?hl=en_GB&gl=Uk' rel='noreferrer' target='_blank' ><img src={google} alt="google store" /></a>
        <a href='https://www.apple.com/uk/app-store/' rel='noreferrer' target='_blank' ><img src={apple} alt="apple store" /></a>                   
      </div>
      <div className="download-right">
        <img src={phone} alt="phone" className='phone-png' />
      </div>      
    </section>
  )
}

export default Download