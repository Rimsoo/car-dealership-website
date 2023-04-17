import React from 'react';
import { Link } from 'react-router-dom';    
import Car from '../components/Car';
import './Pages.css';    

export default function Offer() {
    return (
        <div className='car-windows-area'>
            {/* <h1>Sprawdź naszą ofertę</h1> */}
            <h1>SPRAWDŹ NASZĄ OFERTĘ</h1>
            <Car 
                state={'soon'}
                title={'Mercedes XYZ'}
                mileage={'100000'} 
                year={'2020'} 
                fuel={'Benzyna'} 
                power={'120'} 
                imageSource={'mercedes'}
            />
            <Car 
                state={'70000'}
                title={'Hyundai ABC'}
                mileage={'234456'} 
                year={'2008'} 
                fuel={'Diesel'} 
                power={'210'} 
                imageSource={'hyundai'}
            />
            <Car 
                state={'90000'}
                title={'Hyundai ABC'}
                mileage={'1234345'} 
                year={'2013'} 
                fuel={'Benzyna'} 
                power={'143'} 
                imageSource={'hyundai'}
            />
            <Car 
                state={'soon'}
                title={'Mercedes XYZ'}
                mileage={'456567'} 
                year={'2021'} 
                fuel={'Hybryda'} 
                power={'230'} 
                imageSource={'mercedes'}
            />
            <Car 
                state={'150000'}
                title={'Mercedes XYZ'}
                mileage={'6785554'} 
                year={'2014'} 
                fuel={'Benzyna'} 
                power={'110'} 
                imageSource={'mercedes'}
            />
        </div>
    )
}