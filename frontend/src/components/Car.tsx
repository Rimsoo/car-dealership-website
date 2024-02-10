import { useState} from 'react';
import { NavLink } from 'react-router-dom';    
import calendar from '../assets/card/calendar.png';
import engineering from '../assets/card/engineering.png';
import gasoline from '../assets/card/gasoline.png';
import mileage from '../assets/card/mileage.png';
import gif from "../assets/card/loading.gif";
import './Car.css';

export default function Car(props: any) {
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const handleImageLoad = () => {
      setIsImageLoaded(true);
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

            {/* Infobox */}
            <p className='Car__title'><strong>{props.title}</strong></p>

            <div className='Car__description'>
                <div>                    
                    <img 
                        className='Car__description__icons' 
                        src={calendar}
                        alt='Dealer samochodów premium'
                    />
                    {props.year}
                </div>
                <div>
                    <img 
                        className='Car__description__icons' 
                        src={mileage}
                        alt='Samochody z niskim przebiegiem'
                    />
                    {props.mileage}{' km'}
                </div>
                <div>
                    <img 
                        className='Car__description__icons' 
                        src={engineering}
                        alt='Dealer aut klasy premium w Miechowie'
                    />
                    {props.power}{' KM'}
                </div>
                <div>
                    <img 
                        className='Car__description__icons' 
                        src={gasoline}
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