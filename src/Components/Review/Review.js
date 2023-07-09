import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import glass from '../../Assets/images/glassdoor.png';
import google from '../../Assets/images/google.png';
import trust from '../../Assets/images/trustpilot.png';
import StarIcon from '@mui/icons-material/Star';
import faces from '../../Assets/Data/faces';
import left from '../../Assets/images/left-quote.png';
import right from '../../Assets/images/right-quote.png';

import './review.css';

const Review = () => {

    const displayAtTime = 3;
    const reviewDAT = [];
    for (let i = 0; i < faces.length; i += displayAtTime) {
        reviewDAT.push(faces.slice(i, i + displayAtTime));        
    }

  return (
    <section className="review-bg">
      <h2>What people are saying</h2>

      <div className="top-review grid">        
        <div className="rev-logo">
          <img src={trust} alt="trustpilot" />
          <span><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></span>                        
          <a href='https://uk.trustpilot.com/' rel='noreferrer' target='_blank' ><p>(341+review)</p></a>
        </div>
        <div className="rev-logo">
          <img src={google} alt="google" />
          <span><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></span>
          <a href='https://www.google.co.uk/' rel='noreferrer' target='_blank' ><p>(341+review)</p></a>
        </div>
        <div className="rev-logo">
          <img src={glass} alt="glassdoor" />
          <span><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></span>                        
          <a href='https://www.glassdoor.co.uk/' rel='noreferrer' target='_blank' ><p>(341+review)</p></a>
        </div>
      </div>

      <Carousel showThumbs={false} showStatus={false} showArrows={true}>
        {
          reviewDAT.map((review) => (
            <div className="review-bottom-bg grid">
              {
                review.map(face => (
                  <div key={face.id} className="review-box" >
                    <img src={left} alt="left-quote" />
                    <span className='face-commment'>{face.comment}</span>
                    <img src={right} alt="right-quote" />
                    <div className="review-bottom">
                      <img src={face.img} alt="faces" />
                      <div className="rev-bottom-bottom">
                        <h3>{face.name} {face.surName}</h3>
                        <p>{face.city}</p>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          ))
        }
      </Carousel>
    </section>
  )
}

export default Review;