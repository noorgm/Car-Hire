import React from 'react';

import tips from '../../Assets/images/tip3.jpg';
import './tips.css';

const Tips = () => {
  return (
    <section className="tips-bg">
        <div className="tips container">
            <div className="left-tips">
                <img src={tips} alt="tips" />
            </div>
            <div className="right-tips">
                <h2>Tips & Tricks</h2>
                <div className="main-right-tip">
                    <div className="tip-box">
                        <p>Tip 1</p>
                        <h3>Parking on a hill</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Si soluta tenetur ipsam sit reprehenderit expedita, explicabo doloribus voluptas iure ipsa porro perspiciatis illum, magnam molestiae reiciendis inventore debitis consectetur! Consequuntur.</p>
                    </div>
                    <div className="tip-box">
                        <p>Tip 2</p>
                        <h3>Parking Rules</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Si soluta tenetur ipsam sit reprehenderit expedita, explicabo doloribus voluptas iure ipsa porro perspiciatis illum, magnam molestiae reiciendis inventore debitis consectetur! Consequuntur.</p>
                    </div>
                    <div className="tip-box">
                        <p>Tip 3</p>
                        <h3>Car Becomes an oven</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Si soluta tenetur ipsam sit reprehenderit expedita, explicabo doloribus voluptas iure ipsa porro perspiciatis illum, magnam molestiae reiciendis inventore debitis consectetur! Consequuntur.</p>
                    </div>
                    <div className="tip-box">
                        <p>Tip 4</p>
                        <h3>Planning your journey</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Si soluta tenetur ipsam sit reprehenderit expedita, explicabo doloribus voluptas iure ipsa porro perspiciatis illum, magnam molestiae reiciendis inventore debitis consectetur! Consequuntur.</p>
                    </div>                    
                </div>
            </div>

        </div>
    </section>
  )
}

export default Tips