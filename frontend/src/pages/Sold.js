import React, { useState, useEffect, useRef } from 'react';
import Car from '../components/Car';
import Loader from '../components/Loader';
import useFetch from '../hooks/useFetch';
import mergeSort from '../hooks/mergeSort';
import './Pages.css';

const strapiURL = 'https://kokpit.alfamotors.pl';

// The code line below gets more than 25 records given by a default
const apiURL = 'https://kokpit.alfamotors.pl/api/cars?sort=date&pagination[pageSize]=200&populate=*'; 

// const strapiURL = 'http://localhost:1337';
// const apiURL = 'http://localhost:1337/api/cars?populate=*'; 

export default function Sold() {
    const { loading, error, data } = useFetch(apiURL);
    const containerRef = useRef(null);
    const filteredData = data.filter(car => car[1].attributes.state === 'sold');
    
    // Those IF statements must be above any actions on filteredData variable
    if (loading) return <Loader/>
    if (error) return <p>Error!!!</p>
    
    // Using merge sort for setting cars in the order basing on "owners_number" attribute. It's treated as "kolejność" atttribute in the user's panel
    const sortedFilteredData = mergeSort(filteredData);
    let firstTwelve = sortedFilteredData.slice(0, 12);
    // let anotherTwelve = sortedFilteredData.slice(3, 6);
    
    const loadAnotherTwelve = () => {
        // console.log('foo');
        firstTwelve = sortedFilteredData.slice(0, 24);
    };

    const implementHandleScroll = () => {
        console.log('fertreteroo');

        const handleScroll = () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
                console.log('fertreteroo');
                loadAnotherTwelve();
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            console.log('fertreteroo');
            window.removeEventListener('scroll', handleScroll);
        };
    }

    implementHandleScroll();

    return (
        <div id="Sold">
            <div 
                className='car-windows-area' 
                ref={containerRef}
                // onScroll={handleScroll}
            >
                <h1>POJAZDY, KTÓRE ZNALAZŁY JUŻ NOWEGO WŁAŚCICIELA:</h1>

                {firstTwelve.map((car, index) => (
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
                ))}

                {carsDisplayed.map((car, index) => (
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
                ))}
            </div>
        </div>
    )
}