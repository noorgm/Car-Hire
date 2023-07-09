import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useLocation } from 'react-router-dom';

import PersonalDetail from '../PersonalDetail/PersonalDetail';
import './form.css';
Modal.setAppElement('#root');


const Form = () => {

    const [carType, setCarType] = useState('');
    const [pickupLocation, setPickupLocation] = useState('');
    const [dropoffLocation, setDropoffLocation] = useState('');
    const [pickupDateTime, setPickupDateTime] = useState('');
    const [returnDateTime, setReturnDateTime] = useState('');
    const [showPersonalDetailsModal, setShowPersonalDetailsModal] = useState(false);
    const [confirmationMessage, setConfirmationMessage] = useState('');
    const [showError, setShowError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!carType || !pickupLocation || !dropoffLocation || !pickupDateTime || !returnDateTime) {
          setShowError(true);
          return;
        }
    
        setShowError(false);
        setShowPersonalDetailsModal(true);
    };
    
    const handleConfirmation = () => {
        setShowPersonalDetailsModal(false);
        setConfirmationMessage('Check your email to confirm the order.');
    
        setTimeout(() => {
         setConfirmationMessage('');
     }, 7000);
    };
    
    const handleClose = () => {
        setShowPersonalDetailsModal(false);
    };

    const idLocation = useLocation();

    useEffect(() => {
        if (idLocation.hash) {
            const element = document.getElementById(idLocation.hash.substring(1));
            if(element) {
                element.scrollIntoView();
            }
        } else {
            window.scrollTo(0, 0)
        }
    }, [idLocation])

  return (
    <div className="book-it">
  
      {confirmationMessage && <div style={{ textAlign: 'center', color: 'var(--pinky)', fontWeight: 'bold', fontSize: '27px' }}>{confirmationMessage}</div>}
   
      {showError && <h1 className="required-message">* All fields are required to be provided!</h1>}
          
      <form onSubmit={handleSubmit} className="main-form grid">
        <h1 id='form-id' >Book a car</h1>
        <div className="form-input one">
          <p>Select your car type <span className='star-sym'>*</span></p>
          <select className="input-input" value={carType} onChange={(e) => setCarType(e.target.value)}>
            <option value="">Select your car type</option>
            <option value="vw golf">VW Golf</option>
            <option value="audi q7">Audi Q7</option>
            <option value="audi 6 sline">Audi 6 S Line</option>
            <option value="bmw m4">BMW M4</option>
            <option value="dodge hellcat demon">Dodge Hellcat Demon</option>
            <option value="mustang shelby gt500">Mustang Shelby GT500</option>
          </select>
        </div>

        <div className="form-input two">
          <p>Pick up <span className='star-sym'>*</span></p>
          <select className="input-input" value={pickupLocation} onChange={(e) => setPickupLocation(e.target.value)}>
            <option value="">Select a pick up location</option>
            <option value="leeds">Leeds</option>
            <option value="york">York</option>
            <option value="doncaster">Doncaster</option>
            <option value="wakefield">Wakefield</option>
            <option value="bradford">Bradford</option>
            <option value="hull">Hull</option>
            <option value="sheffield">Sheffield</option>
            <option value="ripon">Ripon</option>
          </select>
        </div>

        <div className="form-input three">
          <p>Return <span className='star-sym'>*</span></p>
          <select className="input-input" value={dropoffLocation} onChange={(e) => setDropoffLocation(e.target.value)}>
            <option value="">Select a return location</option>
            <option value="leeds">Leeds</option>
            <option value="york">York</option>
            <option value="doncaster">Doncaster</option>
            <option value="wakefield">Wakefield</option>
            <option value="bradford">Bradford</option>
            <option value="hull">Hull</option>
            <option value="sheffield">Sheffield</option>
            <option value="ripon">Ripon</option>
          </select>
        </div>

        <div className="form-input four">
          <p>Pick up date & time <span className='star-sym'>*</span></p>
          <input
            className="input-input"
            type="datetime-local"
            value={pickupDateTime}
              onChange={(e) => setPickupDateTime(e.target.value)}
          />
        </div>

        <div className="form-input five">
          <p>Return date & time <span className='star-sym'>*</span></p>
          <input
            className="input-input"
            type="datetime-local"
            value={returnDateTime}
            onChange={(e) => setReturnDateTime(e.target.value)}
          />
        </div>

        <div className="btn">
          <button type="submit" className="input-input six">
            Search
          </button>
        </div>
      </form>
          
      <Modal isOpen={showPersonalDetailsModal} onRequestClose={() => setShowPersonalDetailsModal(false)} >
        <div>
          <PersonalDetail
            carType={carType}
            pickupLocation={pickupLocation}
            dropoffLocation={dropoffLocation}
            pickupDateTime={pickupDateTime}
            returnDateTime={returnDateTime}
            handleConfirmation={handleConfirmation}
            handleClose={handleClose} />
        </div>
      </Modal>
    </div>
  )
}

export default Form