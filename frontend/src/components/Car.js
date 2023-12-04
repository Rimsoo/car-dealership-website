import React, { useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';    
import './Car.css';
import gif from "../assets/loading.gif";

export default function Car(props) {
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const handleImageLoad = () => {
      setIsImageLoaded(true);
      console.log(isImageLoaded)
    };

    return (
        <div className='Car'>
            {/* Ribbon */}
            <span className={
                (props.state === 'soon' || props.state === 'zarezerwowane') ? 
                    'container-ribbon--yellow' : (props.state === 'sold' ? 
                        'container-ribbon--red' : 'container-ribbon--green')}> 
                <span className={
                    (props.state === 'soon' || props.state === 'zarezerwowane') ? 
                        'ribbon--yellow' : (props.state === 'sold' ? 
                            'ribbon--red' : 'ribbon--green')}>
                    {props.state === 'soon' ? 
                        'Już wkrótce!' : (props.state === 'sold' ?
                            'Sprzedane' : props.state === 'zarezerwowane' ?
                                'Zarezerwowane' : props.state)}
                </span>
            </span>

            {/* Main photo */}
            <img 
                className="Car__photo"
                src={props.imageSource}
                alt='Solidne auta używane'
                style={isImageLoaded ? {display: 'block'} : {display: 'none'}}
                // loading="lazy"
                onLoad={handleImageLoad}
            />
            <img 
                className="Car__loader"
                src={gif} 
                alt='Solidne auta używane' 
                style={isImageLoaded ? {display: 'none'} : {display: 'block'}}
            />
            {/* <img 
                className="Car__loader"
                src={gif} 
                alt='Solidne auta używane' 
            /> */}

            {/* Infobox */}
            <p className='Car__title'><strong>{props.title}</strong></p>

            <div className='Car__description'>
                <div>                    
                    <img 
                        className='Car__description__icons' 
                        src={require('../assets/calendar.png')}
                        alt='Dealer samochodów premium'
                    />
                    {props.year}
                </div>
                <div>
                    <img 
                        className='Car__description__icons' 
                        src={require('../assets/mileage.png')}
                        alt='Samochody z niskim przebiegiem'
                    />
                    {props.mileage}{' km'}
                </div>
                <div>
                    <img 
                        className='Car__description__icons' 
                        src={require('../assets/engineering.png')}
                        alt='Dealer aut klasy premium w Miechowie'
                    />
                    {props.power}{' KM'}
                </div>
                <div>
                    <img 
                        className='Car__description__icons' 
                        src={require('../assets/gasoline.png')}
                        alt='Auta używane Miechów'
                    />
                    {props.fuel}
                </div>
            </div>

            <NavLink to={`/CarPage/${props.id}`} >
                <p className='Car__button'>SZCZEGÓŁY</p>
            </NavLink>
        </div>
    )
}