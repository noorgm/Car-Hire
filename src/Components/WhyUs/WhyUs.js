import React from 'react';

import lux from '../../Assets/images/heroo.png'
import enjoy from '../../Assets/images/tip.jpeg';
import './whyUs.css';
import { Link } from 'react-router-dom';

const WhyUs = () => {
  return (
    <section className="why-elec">

      <div className="why-bg">
        <img src={lux} alt="" />
      </div>

      <div className="why-us grid">
        <div className="why-left">
          <h2>Why Choose Us?</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur soluta eligendimolestias eos odio debitis, deleniti dolores distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto soluta quaerat possimus? Facilis accusamus quidemsoluta quaerat possimus? Facilis accusamus quidem libero eveniet accusamus beatae! </p>
          <ul>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
          </ul>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, corrupti velit. Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <Link to='/contact/#contact-id'>
            <button >Contact Us</button>                    
          </Link>
        </div>
        
        <div className="why-right">
          <img src={enjoy} alt="" />
        </div>
      </div>

    </section>
  )
}

export default WhyUs