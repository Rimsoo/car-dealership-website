import React from 'react';
import { Link } from 'react-router-dom';   
import Car from '../components/Car';
import './Pages.css';     

export default function Sold() {
    return (
        <div className='car-windows-area'>
            <h1>SPRZEDANE</h1>
            <Car 
                state={'sold'}
                title={'Hyundai ABC'}
                mileage={'234456'} 
                year={'2008'} 
                fuel={'Diesel'} 
                power={'210'} 
                imageSource={'hyundai'}
            />
            <Car 
                state={'sold'}
                title={'Mercedes XYZ'}
                mileage={'456567'} 
                year={'2021'} 
                fuel={'Hybryda'} 
                power={'230'} 
                imageSource={'mercedes'}
            />
            <Car 
                state={'sold'}
                title={'Hyundai ABC'}
                mileage={'1234345'} 
                year={'2013'} 
                fuel={'Benzyna'} 
                power={'143'} 
                imageSource={'hyundai'}
            />
            <Car 
                state={'sold'}
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