import React from 'react';
import { Link } from 'react-router-dom';    
import Car from '../components/Car';
import './Pages.css';
import { useQuery, gql } from '@apollo/client';
import useFetch from '../hooks/useFetch';

const strapiURL = 'http://localhost:1337';
const apiURL = 'http://localhost:1337/api/cars?populate=*'; // cannot select with url when 'populate' is used. Man must filter below

export default function Offer() {
    const { loading, error, data } = useFetch(apiURL);
    
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!!!</p>
    
    const filteredData = data.filter(car => car[1].attributes.state !== 'sold')

    return (
        <div className='car-windows-area'>
            <h1>SPRAWDŹ NASZĄ OFERTĘ</h1>

            {filteredData.map(car => (
                    <Car 
                        id={car[1].id}
                        state={car[1].attributes.state}
                        title={car[1].attributes.title}
                        mileage={car[1].attributes.mileage} 
                        year={car[1].attributes.year} 
                        fuel={car[1].attributes.fuel} 
                        power={car[1].attributes.power} 
                        imageSource={strapiURL + car[1].attributes.gallery.data[1].attributes.url}
                    />
                )
            )}
        </div>
    )
}


// const PHOTOS = gql`
//     query GetCars {
//         galleries {
//             data {
//                 id,
//                 attributes {
//                     quantity
//                 }
//             }
//         }
//     }
// ` 
// Capital letters only due to convention

// const PHOTOS = gql`
//     query GetCars {
//         cars {
//             data {
//                 id,
//                 attributes {
//                     year
//                 }
//             }
//         }
//     }
// `
            {/* <Car
                id={car.id}
                state={'150 000 PLN'}
                title={car.attributes.title}
                mileage={car.attributes.mileage} 
                year={car.attributes.year} 
                fuel={car.attributes.fuel} 
                power={car.attributes.power} 
                imageSource={'mercedes'}
            /> */}
            {/* <Car 
                id={'2'}
                state={'70000'}
                title={'Hyundai ABC'}
                mileage={'234456'} 
                year={'2008'} 
                fuel={'Diesel'} 
                power={'210'} 
                imageSource={'hyundai'}
            /> */}
            {/* <Car
                id={'3'} 
                state={'90000'}
                title={'Hyundai ABC'}
                mileage={'1234345'} 
                year={'2013'} 
                fuel={'Benzyna'} 
                power={'143'} 
                imageSource={'hyundai'}
            />
            <Car
                id={'5'} 
                state={'soon'}
                title={'Mercedes XYZ'}
                mileage={'456567'} 
                year={'2021'} 
                fuel={'Hybryda'} 
                power={'230'} 
                imageSource={'mercedes'}
            />
            <Car
                id={'4'} 
                state={'150000'}
                title={'Mercedes XYZ'}
                mileage={'6785554'} 
                year={'2014'} 
                fuel={'Benzyna'} 
                power={'110'} 
                imageSource={'mercedes'}
            /> */}