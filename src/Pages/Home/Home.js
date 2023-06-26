import React from 'react';

import StarIcon from '@mui/icons-material/Star';
import hero from '../../Assets/images/background3.svg';
import lux from '../../Assets/images/car/Luxury/jaguar.png';
import './home.css';


const Home = () => {
  return (
    <section className="home">
      <div className="home-main container">

        <div className="home-left">
          <h4>Electric Cars Available</h4>
          <h1>Your Road Trip <span className='starts'>Starts</span> Here</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea.</p>
          <p>Dolor sit amet consectetur adipisicing.</p>
          <div className="home-left-bottom">
            <button>Book Trip</button>
            <p>+537 Reviews <br /><span><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /> </span></p>
          </div>
          <img className='home-lux' src={lux} alt="lux" />
        </div>
        <div className="home-right">
          <img src={hero} alt="hero" />
        </div>
      </div>
    </section>
  )
}

export default Home