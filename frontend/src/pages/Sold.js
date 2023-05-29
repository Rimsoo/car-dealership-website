import React from 'react';
import { Link } from 'react-router-dom';   
import Car from '../components/Car';
import './Pages.css';
import useFetch from '../hooks/useFetch';

const strapiURL = 'http://strapi.ardeo-studio.pl';
const apiURL = 'http://strapi.ardeo-studio.pl/api/cars?populate=*'; // cannot select with url when 'populate' is used. Man must filter below

export default function Sold() {
    const { loading, error, data } = useFetch(apiURL);
    
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!!!</p>
    
    const filteredData = data.filter(car => car[1].attributes.state === 'sold')

    return (
        <div className='car-windows-area'>
            <h1>SPRZEDANE</h1>

            {filteredData.map((car, index) => (
                    <Car 
                        key={'Car no ' + index}
                        id={car[1].id}
                        state={car[1].attributes.state}
                        title={car[1].attributes.title}
                        mileage={car[1].attributes.mileage} 
                        year={car[1].attributes.year} 
                        fuel={car[1].attributes.fuel} 
                        power={car[1].attributes.power} 
                        imageSource={strapiURL + car[1].attributes.gallery.data[0].attributes.url}
                    />
                )
            )}
        </div>
    )
}