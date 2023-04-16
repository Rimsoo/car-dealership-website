import React from 'react';
import { Link } from 'react-router-dom';    
import './Car.css';    

export default function Car() {

    return (
        <div className='Car'>
            <img src='./assets/mercedes.jpg' />

            <p className='Car__title'>Mercedes XYZ</p>

            <div className='Car__description'>
                <div>
                    <img className='Car__description__icons' 
                        src='./assets/mileage.png'
                    />
                     122687
                </div>
                <div>                    
                    <img className='Car__description__icons' 
                        src='./assets/calendar.png'
                    />
                    2022
                </div>
                <div>
                    <img className='Car__description__icons' 
                        src='./assets/gasoline.png'
                    />
                    Benzyna
                </div>
                <div>
                    <img className='Car__description__icons' 
                        src='./assets/engineering.png'
                    />
                    230KM
                </div>
            </div>

            <button>SZCZEGÓŁY ></button>
        </div>
    )
}