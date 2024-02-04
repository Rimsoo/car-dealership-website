import { useState} from 'react';
import { NavLink } from 'react-router-dom';    
import calendar from '../assets/calendar.png';
import engineering from '../assets/engineering.png';
import gasoline from '../assets/gasoline.png';
import mileage from '../assets/mileage.png';
import gif from "../assets/loading.gif";
import './Car.css';

export default function Car(props: any) {
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const handleImageLoad = () => {
      setIsImageLoaded(true);
    };

    return (
        <div className='Car'>
            {/* Ribbon's container */}
            <span className={
                (props.state === 'soon' || props.state === 'zarezerwowane') ? 
                    'container-ribbon--yellow' : (props.state === 'sold' ? 
                    'container-ribbon--red' : 
                    'container-ribbon--green')}
            > 
                {/* Ribbon */}
                <span className={
                    (props.state === 'soon' || props.state === 'zarezerwowane') ? 
                        'ribbon--yellow' : (props.state === 'sold' ? 
                        'ribbon--red' : 
                        'ribbon--green')}
                >

                    {/* Text in the ribbon */}
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

            {/* Infobox */}
            <p className='Car__title'><strong>{props.title}</strong></p>

            <div className='Car__description relative right-[10px]'>
                <div className='car__description__container--odd'>                    
                    <img 
                        className='car__description__container__icons' 
                        src={calendar}
                        alt='Dealer samochodów premium'
                    />
                    {props.year}
                </div>
                <div className='car__description__container--even'>
                    <img 
                        className='car__description__container__icons' 
                        src={mileage}
                        alt='Samochody z niskim przebiegiem'
                    />
                    {props.mileage}{' km'}
                </div>
                <div className='car__description__container--odd'>
                    <img 
                        className='car__description__container__icons' 
                        src={engineering}
                        alt='Dealer aut klasy premium w Miechowie'
                    />
                    {props.power}{' KM'}
                </div>
                <div className='car__description__container--even'>
                    <img 
                        className='car__description__container__icons' 
                        src={gasoline}
                        alt='Auta używane Miechów'
                    />
                    {props.fuel}
                </div>
            </div>

            <NavLink to={`/CarPage/${props.id}`} >
                {/* <p className='Car__button'>SZCZEGÓŁY</p> */}
                <p className='block mx-auto w-[97px] h-[31px] text-center leading-[31px] text-lg font-[bebasFont] border-2 border-black rounded bg-white text-black no-underline cursor-pointer transition-colors duration-500 
                hover:bg-black hover:text-white'>SZCZEGÓŁY</p>
            </NavLink>
        </div>
    )
}