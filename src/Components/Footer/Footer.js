import React from 'react';


import logo from '../../Assets/images/logoo.svg';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import CopyrightIcon from '@mui/icons-material/Copyright';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section className="footer-bg">
      <div className="footer container">

        <div className="left-footer">
          <Link to='/'><img src={logo} alt="logo" className='footer-logo' /></Link>         
          <h3>We have all sorts of car from Electric to Luxury. Leave us a message and we will call you back right away!</h3>
          <p>0113 345 7631</p>
          <p>admin@hireacar.co.uk</p>
        </div>

        <div className="right-footer">
          <div className="rf-left">
            <h4>How It Works</h4>
            <div className="rf-left-items">
              <p>Rent a car</p>
              <p>Get in touch</p>
              <p>Our app</p>
            </div>
          </div>
          <div className="rf-left">
            <h4>Help</h4>
            <div className="rf-left-items">
              <p>About Us</p>
              <p>Contact Us</p>
              <p>Testimoni</p>
              <p>FAQs</p>
            </div>
          </div>
          <div className="rf-left">
            <h4>Working Hours</h4>
            <div className="rf-left-items">
              <p>Mon - Sat 24/hr</p>
              <p>Sunday 8am - 6pm</p>
              <p>Emergency Lines are open 24/7</p>
            </div>
          </div>
        </div>
      </div>

        <div className="bottom-footer container">
          <div className="bf-left">
            <p><CopyrightIcon className='copyright' />Noorullah GM. All right reserved 2023</p>
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
          </div>

          <div className="bf-right">
            <FacebookIcon className='footer-icon' />
            <InstagramIcon className='footer-icon' />
            <TwitterIcon className='footer-icon' />
          </div>
        </div>
        
    </section>
  )
}

export default Footer