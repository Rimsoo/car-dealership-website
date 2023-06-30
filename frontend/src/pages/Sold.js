import React from 'react';
import Car from '../components/Car';
import './Pages.css';
import useFetch from '../hooks/useFetch';

const strapiURL = 'https://kokpit.alfamotors.pl';
// const apiURL = 'https://kokpit.alfamotors.pl/api/cars?populate=*'; 
// The code line below gets more than 25 records given by a default
const apiURL = 'https://kokpit.alfamotors.pl/api/cars?sort=date&pagination[pageSize]=200&populate=*'; 

// const strapiURL = 'http://localhost:1337';
// const apiURL = 'http://localhost:1337/api/cars?populate=*'; 
// cannot select with url when 'populate' is used. Man must filter below

export default function Sold() {
    const { loading, error, data } = useFetch(apiURL);
    
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!!!</p>
    
    const filteredData = data.filter(car => car[1].attributes.state === 'sold')

    return (
        <div id="Sold">
            <div className='car-windows-area'>
                <h1>POJAZDY, KTÓRE ZNALAZŁY JUŻ NOWEGO WŁAŚCICIELA:</h1>

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
        </div>
    )
}