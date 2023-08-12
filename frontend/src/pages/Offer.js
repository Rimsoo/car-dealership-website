import React from 'react';
import Car from '../components/Car';
import Loader from '../components/Loader';
import mergeSort from '../hooks/mergeSort';
import './Pages.css';
// import { useQuery, gql } from '@apollo/client';
import useFetch from '../hooks/useFetch';

const strapiURL = 'https://kokpit.alfamotors.pl';
const apiURL = 'https://kokpit.alfamotors.pl/api/cars?sort=date&pagination[pageSize]=200&populate=*'; 

// Local version:
// const strapiURL = 'http://localhost:1337';
// const apiURL = 'http://localhost:1337/api/cars?populate=*';

export default function Offer() {
    const { loading, error, data } = useFetch(apiURL);
    
    if (loading) return <Loader/>
    if (error) return <p>Error!!!</p>
    
    const filteredData = data.filter(car => car[1].attributes.state !== 'sold');
    const sortedFilteredData = mergeSort(filteredData);
    
    return (
        <div id="Offer">
            <div className='car-windows-area'>
                <h1>SPRAWDŹ NASZĄ OFERTĘ</h1>
        

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