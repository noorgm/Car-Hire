import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import allCarsData from '../../Assets/Data/carData';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import './cars.css';


const Cars = () => {

  const [ selectMake, setSelectMake ] = useState('');
  const [ selectModel, setSelectModel ] = useState('');
  const [ models, setModels ] = useState([]);
  const [ carData, setCarData ] = useState(null);
  const [ searchAll, setSearchAll] = useState(true);


  // Select a Car Make
  const selectMakeHandler = (e) => {
    const make = e.target.value;
    setSelectMake(make);

    // Once Car Make selected then choose a car Model
    const filterTheModels = allCarsData.filter((car) => car.make === make).map((car) => car.model);

    setModels(filterTheModels)
  };

  // Model Selection Event Handler
  const modelSelectionHandler = (e) => {
    const model = e.target.value;
    setSelectModel(model)
  }

  // Search Button Event Handler
  const searchHandler = () => {
    const car = allCarsData.find((car) => car.make === selectMake && car.model === selectModel);

    if (car) { 
      console.log(car);
      setCarData(car)
    } else {
      console.log('Car Not Found');
      setCarData(null)
    }
    setSearchAll(false);
  };

  // Show All Button Event Handler
  const searchAllHandler = () => {
    setSearchAll(true)
    setCarData(null)
  }

  // Clearing Page Handler 
  // const clearPageHandler = () => {
  //   setSearchAll(false)
  //   setCarData(null)
  // }

  return (
    <main className="cars">
      <h2>Search Cars</h2>
      <section className="car-search grid">
        <div className="car-make">
          <p>CAR BRAND</p>
          <select className='car-select' value={selectMake} onChange={selectMakeHandler}>
            <option value="">Select Car Brand</option>
            {
              Array.from(new Set(allCarsData.map((car) => car.make))).map((make) => ( 
                <option value={make} key={make}>{make}</option>
              ))
            }
          </select>
        </div>

        <div className="car-model">
          <p>CAR MODEL</p>
          <select className='car-select' value={selectModel} onChange={modelSelectionHandler}>
            <option value="">Select Car Model</option>
            {
              models.map((model) => (
                <option value={model} key={model}>{model}</option>
              ))
            }
          </select>
        </div>

        <div className="car-btn">
          <button onClick={searchHandler} >Search</button>
          <button onClick={searchAllHandler} >Search All</button>
        </div>
      </section>


      {/* Once user seleted their choosen make and model upon pressing the search button the following data will be displyed about their seleted make model */}
      {
        carData && (
          <div className="scs-bgg">
          <section className="single-cr-search grid">
            <div className="scs-main">
              <div className="scs">
                <h2>{carData.make} {carData.model} </h2>
                <p>{carData.sprt}</p>              
              </div>  
              <Link to='/#form-id'>
                <button>Reserve Now</button>                  
              </Link>     
            </div>

            <img src={carData.img} alt="car" className='scs-car' />

            <div className="scs-btm grid">
              <div className="scs-btm-left">
                <div className="scs-btm-box">
                  <span className='car-icon'><PersonOutlineOutlinedIcon /></span>
                  <p>{carData.seat}</p>
                </div>
                <div className="scs-btm-box">
                  <span className='car-icon'><RepeatOutlinedIcon /></span>
                  <p>{carData.transmission}</p>
                </div>
                <div className="scs-btm-box">
                  <span className='car-icon'><WaterDropOutlinedIcon /></span>
                  <p>{carData.mileage}</p>
                </div>                
              </div>
              <div className="scs-btm-r">
                <p>{carData.price}</p>       
              </div>
            </div>
          </section>
          </div>
        )
      }


      {/* Upon Pressing Search All Button */}
      {
        searchAll && (
          <div className="scs-bgg scs-new">
            {
              allCarsData.map((car, index) => (
                <div className="single-cr-search grid">
                  <div className="scs-main">
                    <div className="scs">
                      <h2>{car.make} {car.model} </h2>
                      <p>{car.sprt}</p>              
                    </div>  
                    <Link to='/#form-id'>
                      <button>Reserve Now</button>                  
                    </Link>     
                  </div>

                  <img src={car.img} alt="car" className='scs-car' />

                  <div className="scs-btm grid">
                    <div className="scs-btm-left">
                      <div className="scs-btm-box">
                        <span className='car-icon'><PersonOutlineOutlinedIcon /></span>
                        <p>{car.seat}</p>
                      </div>
                      <div className="scs-btm-box">
                        <span className='car-icon'><RepeatOutlinedIcon /></span>
                        <p>{car.transmission}</p>
                      </div>
                      <div className="scs-btm-box">
                        <span className='car-icon'><WaterDropOutlinedIcon /></span>
                        <p>{car.mileage}</p>
                      </div>                
                    </div>
                    <div className="scs-btm-r">
                      <p>{car.price}</p>       
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        )
      }
       


    </main>    
  )
}

export default Cars;


//         <div className="scs-main">
//           <div className="scs">
//             <h2>{car.make} {car.model} </h2>
//             <p>{car.sprt}</p>              
//           </div>  
//           <Link to='/#form-id'>
//             <button>Reserve Now</button>                  
//           </Link>     
//         </div>

//         <img src={car.img} alt="car" />

//         <div className="scs-btm">
//           <p> <span><PersonOutlineOutlinedIcon className='car-icon' /></span> {car.seat}</p>
//           <p> <span><RepeatOutlinedIcon className='car-icon' /></span> {car.transmission}</p>
//           <p> <span><WaterDropOutlinedIcon className='car-icon' /></span> {car.mileage}</p>
//           <div className="scs-btm-r">
//             <p>{car.price}</p>       
//           </div>
//         </div>         
//       </>       
//       ))
//     }
//   </section>
//   )
// }