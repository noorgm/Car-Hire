import React from 'react';
import { Link } from 'react-router-dom';

import StarIcon from '@mui/icons-material/Star';
import hero from '../../Assets/images/page-hero.svg';
import Form from '../../Components/Form/Form';
// import Tips from '../../Components/Tips/Tips';
// import Support from '../../Components/Support/Support';
// import WhyUs from '../../Components/WhyUs/WhyUs';
// import Review from '../../Components/Review/Review';
// import Faq from '../../Components/FAQ/Faq';
// import Download from '../../Components/Dowload/Download';
import './home.css';


const Home = () => {
  return (
    <main className="home">

      <section className='home-main grid'>
        <div className="home-left">
          <h4>Electric Cars Available</h4>
          <h1>Your Road Trip <span className='starts'>Starts</span> Here</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea.</p>
          <p>Dolor sit amet consectetur adipisicing.</p>
        </div>

        <div className="home-left-bottom">
          <Link to='/#form-id'>
            <button>Book Trip</button>            
          </Link>
          <p>+537 Reviews <br /><span><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /> </span></p>
        </div>

        <div className="home-right">
          <img src={hero} alt="hero" />
        </div>

      </section>
      <Form />

      {/* OTHER COMPONENTS */}
      {/* <Tips />
      <WhyUs />
      <Support />
      <Review />
      <Download />
      <Faq /> */}

    </main>
  )
}

export default Home