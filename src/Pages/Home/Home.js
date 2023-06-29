import React from 'react';

import StarIcon from '@mui/icons-material/Star';
import hero from '../../Assets/images/page-hero.svg';
import Form from '../../Components/Form/Form';
import Tips from '../../Components/Tips/Tips';
import Support from '../../Components/Support/Support';
import WhyUs from '../../Components/WhyUs/WhyUs';
import Review from '../../Components/Review/Review';
import './home.css';
import Faq from '../../Components/FAQ/Faq';


const Home = () => {
  return (
    <section className="home">
      <div className="home-main container">

        <div className="home-left">
          <h4>Electric Cars Available</h4>
          <h1>Your Road Trip <br /><span className='starts'>Starts</span> Here</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea.</p>
          <p>Dolor sit amet consectetur adipisicing.</p>
          <div className="home-left-bottom">
            <button>Book Trip</button>
            <p>+537 Reviews <br /><span><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /> </span></p>
          </div>
        </div>
        <Form />
      </div>
        <div className="home-right">
          <img src={hero} alt="hero" />
        </div>

        <Tips />
        <WhyUs />
        <Support />
        <Review />
        <Faq />
    </section>
  )
}

export default Home