import React from 'react';

import glass from '../../Assets/images/glassdoor.png';
import google from '../../Assets/images/google.png';
import trust from '../../Assets/images/trustpilot.png';
import StarIcon from '@mui/icons-material/Star';

import './review.css';

const Review = () => {
  return (
    <section className="review-bg">
        <div className="review container">
            <div className="top-review">
                <h2>What people are saying</h2>
                <div className="review-logos">
                    <div className="rev-logo">
                        <img src={trust} alt="trustpilot" />
                        <span><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></span>                        
                        <p>(341+review)</p>
                    </div>
                    <div className="rev-logo">
                        <img src={google} alt="google" />
                        <span><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></span>
                        <p>(341+review)</p>
                    </div>
                    <div className="rev-logo">
                        <img src={glass} alt="glassdoor" />
                        <span><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></span>                        
                        <p>(341+review)</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Review