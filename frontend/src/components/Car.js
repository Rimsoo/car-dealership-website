import React from 'react';
import { Link } from 'react-router-dom';    
import './Car.css';    

export default function Car(props) {

    return (
        <div className='Car'>
            {/* <span className='container-ribbon' */}
            <span className={props.state === 'soon' ? 
                    'container-ribbon--yellow' : (props.state === 'sold' ? 
                        'container-ribbon--red' : 'container-ribbon--green')}> 
                <span className={props.state === 'soon' ? 'ribbon--yellow' : (props.state === 'sold' ? 'ribbon--red' : 'ribbon--green')}>
                    {props.state === 'soon' ? 'Już wkrótce!' : (props.state === 'sold' ? 'Sprzedane' : props.state + ' PLN')}
                </span>
            </span>

            <img src={'./assets/' + props.imageSource + '.jpg'} />

            <p className='Car__title'>{props.title}</p>

            <div className='Car__description'>
                <div>
                    <img className='Car__description__icons' 
                        src='./assets/mileage.png'
                    />
                     {props.mileage}
                </div>
                <div>                    
                    <img className='Car__description__icons' 
                        src='./assets/calendar.png'
                    />
                    {props.year}
                </div>
                <div>
                    <img className='Car__description__icons' 
                        src='./assets/gasoline.png'
                    />
                    {props.fuel}
                </div>
                <div>
                    <img className='Car__description__icons' 
                        src='./assets/engineering.png'
                    />
                    {props.power}{' KM'}
                </div>
            </div>

            <button>SZCZEGÓŁY</button>
        </div>
    )
}