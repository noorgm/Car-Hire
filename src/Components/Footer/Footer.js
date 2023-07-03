import React from 'react';


import logo from '../../Assets/images/logoo.svg';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import './footer.css';

const Footer = () => {
  return (
    <section className="footer-bg">
      <div className="footer container">

        <div className="left-footer">
          <img src={logo} alt="logo" className='footer-logo' />
          <h3>We have all sorts of car from Electric to Luxury and also few top sporty car.Leave us a message and we will call you back right away</h3>
          <p>0113 345 7631</p>
          <p>admin@hireacar.co.uk</p>
        </div>

        <div className="right-footer">
          <div className="rf-left">
            <h4>How It Works</h4>
            <div className="rf-left-items">
              <p>Rent a car</p>
              <p>Get in touch</p>
              <p>Download our app</p>
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

        <div className="bottom-footer">
          <div className="bf-left">
            <p>&copy; Noorullah GM. All right reserved 2023</p>
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
          </div>

          <div className="bf-right">
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Footer