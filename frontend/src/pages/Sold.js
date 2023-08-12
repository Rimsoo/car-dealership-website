import React, { useEffect } from 'react';
import Car from '../components/Car';
import Loader from '../components/Loader';
import './Pages.css';
import useFetch from '../hooks/useFetch';

const strapiURL = 'https://kokpit.alfamotors.pl';

// The code line below gets more than 25 records given by a default
const apiURL = 'https://kokpit.alfamotors.pl/api/cars?sort=date&pagination[pageSize]=200&populate=*'; 

// const strapiURL = 'http://localhost:1337';
// const apiURL = 'http://localhost:1337/api/cars?populate=*'; 

export default function Sold() {
    const { loading, error, data } = useFetch(apiURL);
    
    if (loading) return <Loader/>
    if (error) return <p>Error!!!</p>
    
    const filteredData = data.filter(car => car[1].attributes.state === 'sold')
    // console.log(filteredData[<number of car>][1].attributes.owners_number);
    // console.log(-1 < null);

    // Using merge sort for setting cars in the order basing on "owners_number" attribute. It's treated as "kolejność" atttribute in the user's panel
    const mergeSortSplitting = (arrayToSplit) => {
        if (arrayToSplit.length === 1) return arrayToSplit;

        const arrayMiddleOne = arrayToSplit.length / 2;
        const arrayLeft = arrayToSplit.slice(0, arrayMiddleOne);
        const arrayRight = arrayToSplit.slice(arrayMiddleOne);

        return mergeSortComparing(mergeSortSplitting(arrayLeft), mergeSortSplitting(arrayRight));
    }

    const mergeSortComparing = (arrayLeft, arrayRight) => {
        const arraySorted = [];

        while(arrayLeft.length && arrayRight.length) {
            if (arrayLeft[0][1].attributes.owners_number > arrayRight[0][1].attributes.owners_number) {
                arraySorted.push(arrayLeft.shift());
            } else {
                arraySorted.push(arrayRight.shift());
            }
        }

        return arraySorted.concat(arrayLeft.slice()).concat(arrayRight.slice());
    }

    const sortedFilteredData = mergeSortSplitting(filteredData);
    console.log(sortedFilteredData);

    return (
        <div id="Sold">
            <div className='car-windows-area'>
                <h1>POJAZDY, KTÓRE ZNALAZŁY JUŻ NOWEGO WŁAŚCICIELA:</h1>

                {sortedFilteredData.map((car, index) => (
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