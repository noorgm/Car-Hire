import React, { useState } from 'react';
import './personalDetail.css';

const PersonalDetail = ({ carType, pickupLocation, dropoffLocation, pickupDateTime, returnDateTime, handleConfirmation, handleClose }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postCode, setPostCode] = useState('');
  const [errors, setErrors] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !surname || !email || !phoneNumber || !age || !address || !city || !postCode) {
      setErrors(true)
      return;
    }

    setErrors(false);
    handleConfirmation();

  };

  return (
    <form onSubmit={handleSubmit} className='personal-form'>

      <div className="complete-it">
        <h1>Complete Booking</h1>
        <button className='close' onClick={handleClose}>X</button>
      </div>
      <div className="voucher-bg">
      <div className="personal-voucher container">
        <h3>Once providing your details, you will shortly receive: </h3>
        <p>Your rental customer's reference number which is needed on arrival to office to collect the car.</p>
      </div>
      </div>

      <div className="car-details container">
        <div className="choosen-vehicle">
          <h3>Vehicle And The Time You're About To Reserve!</h3>
        </div>
        <div className="choosen-info">
          <div className="reserve-info reserve-center">
            <p>Vehicle:</p>
            <span>{carType}</span>
          </div>
          <div className="reserve-info">
            <p>Pick Up Location:</p>
            <span>{pickupLocation}</span>
          </div>        
          <div className="reserve-info">
            <p>Drop Off Location:</p>
            <span>{dropoffLocation}</span>
          </div>
          <div className="reserve-info">
            <p>Pick Up Time & Date:</p>
            <span>{pickupDateTime}</span>
          </div>
          <div className="reserve-info">
            <p>Return Time & Date:</p>
            <span>{returnDateTime}</span>
          </div>               
        </div>
      </div>

      {/* Form Filling Section Starts Here */}
      <div className='filling-form container'>     
      <h1>Personal Details Form</h1>
      <div className="personal-container">      
      {errors && <h1 className="required-message">* All fields are required to be provided!</h1>}
        <div className="personal-names">
          <div className='personal-name'>
            <p>Name <span className='star-sym'>*</span></p>
            <input className='personal-input' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Your First Name' />
            {errors.name && <span>{errors.name}</span>}
          </div>
          <div className='personal-surname'>
            <p>Surname <span className='star-sym'>*</span></p>
            <input className='personal-input' type="text" value={surname} onChange={(e) => setSurname(e.target.value)} placeholder='Enter Your Sur-Name'/>
            {errors.surname && <span>{errors.surname}</span>}
          </div>
        </div>

        <div className='personal-email'>
          <p>Email <span className='star-sym'>*</span></p>
          <input className='hundred' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your Email Address' />
          {errors.email && <span>{errors.email}</span>}
        </div>

        <div className="personal-digit">
          <div className='personal-phone'>
            <p>Phone Number <span className='star-sym'>*</span></p>
            <input className='personal-input' type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder='Enter Your Phone Number' />
            {errors.phoneNumber && <span>{errors.phoneNumber}</span>}
          </div>
          <div className='personal-age'>
            <p>Age <span className='star-sym'>*</span> </p>
            <input className='personal-input' type="tel" value={age} onChange={(e) => setAge(e.target.value)} placeholder='Enter Your Age' />
            {errors.age && <span>{errors.age}</span>}
          </div>
        </div>

        <div className='personal-address'>
          <p>Address <span className='star-sym'>*</span> </p>
          <input className='hundred' type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Enter Your Address' />
          {errors.address && <span>{errors.address}</span>}
        </div>

        <div className="personal-live">
          <div className='personal-city'>
            <p>City <span className='star-sym'>*</span> </p>
            <input className='personal-input' type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder='Enter Your City Name' />
            {errors.city && <span>{errors.city}</span>}
          </div>
          <div className='personal-zip'>
            <p>Post Code <span className='star-sym'>*</span> </p>
            <input className='personal-input' type="text" value={postCode} onChange={(e) => setPostCode(e.target.value)} placeholder='Enter Your Post Code' />
            {errors.postCode && <span>{errors.postCode}</span>}
          </div>
        </div>        
       </div>
      </div>

      <button className='personal-btn' type="submit">Reserve Now</button>
      {/* {confirmationMessage && <div className="confirmation-message">{confirmationMessage}</div>} */}
    </form>
  );
};

export default PersonalDetail;





