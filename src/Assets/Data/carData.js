import fiveSeries from '../images/car/bmw-5series.png';
import premiumCar from '../images/car/large-premium-mercedez.png';
import sevenSeater from '../images/car/7-seater.png';


const allCarsData = [
    {
        make: 'VW', model: 'Golf', year: '2022', seat: '5', mileage: '230m/day' , transmission: 'Manual', sprt: 'TDI', price: '£27/day', img: sevenSeater
    }, 
    {
        make: 'BMW', model: '5 Series', year: '2023', seat: '5', mileage: '230m/day', transmission: 'Automatic', sprt: 'Sport Line', price: '£51/day', img: fiveSeries
    }, 
    {
        make: 'Mercdz', model: 'E Class', year: '2023', seat: '5', mileage: '230m/day', transmission: 'Manual', sprt: 'AMG', price: '£67/day', img: premiumCar
    }
]

export default allCarsData;