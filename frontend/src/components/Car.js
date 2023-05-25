import React from 'react';
import { NavLink } from 'react-router-dom';    
import './Car.css';    

export default function Car(props) {

    return (
        <div className='Car'>
            {/* <span className='container-ribbon' */}
            <span className={props.state === 'soon' ? 
                    'container-ribbon--yellow' : (props.state === 'sold' ? 
                        'container-ribbon--red' : 'container-ribbon--green')}> 
                <span className={props.state === 'soon' ? 
                    'ribbon--yellow' : (props.state === 'sold' ? 
                        'ribbon--red' : 'ribbon--green')}>
                    {props.state === 'soon' ? 
                        'Już wkrótce!' : (props.state === 'sold' ?
                            'Sprzedane' : props.state)}
                </span>
            </span>

            <img src={props.imageSource} />

            <p className='Car__title'>{props.title}</p>

            <div className='Car__description'>
                <div>
                    <img className='Car__description__icons' 
                        src={require('../assets/mileage.png')}
                    />
                     {props.mileage}
                </div>
                <div>                    
                    <img className='Car__description__icons' 
                        src={require('../assets/calendar.png')}
                    />
                    {props.year}
                </div>
                <div>
                    <img className='Car__description__icons' 
                        src={require('../assets/engineering.png')}
                    />
                    {props.power}{' KM'}
                </div>
                <div>
                    <img className='Car__description__icons' 
                        src={require('../assets/gasoline.png')}
                    />
                    {props.fuel}
                </div>
            </div>

            <NavLink to={`/CarPage/${props.id}`} >
                <button>SZCZEGÓŁY</button>
            </NavLink>
        </div>
    )
}