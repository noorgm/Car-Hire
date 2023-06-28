import React from 'react';

import glass from '../../Assets/images/glassdoor.png';
import google from '../../Assets/images/google.png';
import trust from '../../Assets/images/trustpilot.png';
import StarIcon from '@mui/icons-material/Star';
import faces from '../../Assets/Data/faces';

import megan from '../../Assets/faces/face5.svg';
import janna from '../../Assets/faces/face.svg';
import young from '../../Assets/faces/face3.svg';
import abdi from '../../Assets/faces/face2.svg';
import homed from '../../Assets/faces/face7.svg';

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
            </div>


            <div className="bottom-review">


                <div className="review-box">
                    <div className="container">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae soluta, placeat illum ullam labore impedit autem nulla dolor, sunt animi laborum tempore cupiditate molestias dolorum facilis ipsa quisquam optio a. Facilis.</p>
                        <div className="rev-box-bottom">
                            <img src={megan} alt="megan" />
                            <div className="rev-box-b-right">
                                <p>First Surname</p>
                                <p>City</p>
                            </div>
                        </div>
                    </div>
                </div>
                

            </div>
        </div>
    </section>
  )
}

export default Review;












                    // <div className="review-box">
                    //     <div className="container">
                    //         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae soluta, placeat illum ullam labore impedit autem nulla dolor, sunt animi laborum tempore cupiditate molestias dolorum facilis ipsa quisquam optio a. Facilis.</p>
                    //         <div className="rev-box-bottom">
                    //             <img src={abdi} alt="abdi" />
                    //             <div className="rev-box-b-right">
                    //                 <p>First Surname</p>
                    //                 <p>City</p>
                    //             </div>
                    //         </div>
                    //     </div>
                    // </div>
                    // <div className="review-box">
                    //     <div className="container">
                    //         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae soluta, placeat illum ullam labore impedit autem nulla dolor, sunt animi laborum tempore cupiditate molestias dolorum facilis ipsa quisquam optio a. Facilis.</p>
                    //         <div className="rev-box-bottom">
                    //             <img src={janna} alt="janna" />
                    //             <div className="rev-box-b-right">
                    //                 <p>First Surname</p>
                    //                 <p>City</p>
                    //             </div>
                    //         </div>
                    //     </div>
                    // </div>
                    // <div className="review-box">
                    //     <div className="container">
                    //         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae soluta, placeat illum ullam labore impedit autem nulla dolor, sunt animi laborum tempore cupiditate molestias dolorum facilis ipsa quisquam optio a. Facilis.</p>
                    //         <div className="rev-box-bottom">
                    //             <img src={homed} alt="homed" />
                    //             <div className="rev-box-b-right">
                    //                 <p>First Surname</p>
                    //                 <p>City</p>
                    //             </div>
                    //         </div>
                    //     </div>
                    // </div>
                    // <div className="review-box">
                    //     <div className="container">
                    //         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae soluta, placeat illum ullam labore impedit autem nulla dolor, sunt animi laborum tempore cupiditate molestias dolorum facilis ipsa quisquam optio a. Facilis.</p>
                    //         <div className="rev-box-bottom">
                    //             <img src={young} alt="young" />
                    //             <div className="rev-box-b-right">
                    //                 <p>First Surname</p>
                    //                 <p>City</p>
                    //             </div>
                    //         </div>
                    //     </div>
                    // </div>