import { useEffect, useState } from 'react';
import Car from '../components/Car';
import Loader from '../components/Loader';
import useFetch from '../hooks/useFetch';
import mergeSort from '../hooks/mergeSort';

const strapiURL: string = 'https://kokpit.alfamotors.pl';

// const apiURL: string = 'https://kokpit.alfamotors.pl/api/cars?sort=date&pagination[pageSize]=200&populate=*';


// The code line below gets more than 25 records given by a default, the Strapi's limit is 100 (can't be increased)
const apiURL1: string = 'https://kokpit.alfamotors.pl/api/cars?sort=date&pagination[pageSize]=100&populate=*'; // First 100 records
const apiURL2: string = 'https://kokpit.alfamotors.pl/api/cars?sort=date&pagination[start]=100&pagination[limit]=100&populate=*'; // Next 100 records


    // Local:
// const strapiURL = 'http://localhost:1337';
// const apiURL = 'http://localhost:1337/api/cars?populate=*'; 

interface CarAttributes {
    state: string;
    title: string;
    mileage: number;
    year: number;
    fuel: string;
    power: number;
    gallery: GalleryItem;
}

interface GalleryItem {
    data: {
        attributes: {
            formats: {
                large: {
                    url: string;
                };
                medium: {
                    url: string;
                };
                small: {
                    url: string;
                };
                thumbnail: {
                    url: string;
                };
            };
        };
        id: number;
    }[];
}
  
interface CarData {
    id: string;
    attributes: CarAttributes;
}

export default function Sold() {
    // const { loading, error, data } = useFetch(apiURL);

        // State to store the combined data
    const [data, setData] = useState<CarData[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
    // Set loading to true when the fetch begins
    setLoading(true);

    // Fetch data concurrently
    Promise.all([fetch(apiURL1), fetch(apiURL2)])
        .then(async ([response1, response2]) => {
            if (!response1.ok) throw new Error('Error fetching first chunk');
            if (!response2.ok) throw new Error('Error fetching second chunk');

            const data1 = await response1.json();
            const data2 = await response2.json();

            // console.log(data1.data, data2.data)
            // console.log([...data1, ...data2])
            // console.log([...data1.data, ...data2.data]);
            
            // Assuming the data you're interested in is in the `data` field
            return [...data1.data, ...data2.data];
        })
        .then((combinedData) => {
            // Filter and sort data here or do it later when rendering
            const filteredData = combinedData.filter((car: CarData) => car.attributes.state === 'sold');
            // console.log(filteredData);

            // Implement or import your mergeSort function here, ensuring it is compatible with TypeScript
            const sortedFilteredData = mergeSort(filteredData); // Ensure you have a `mergeSort` function defined and it is typed correctly

            setData(sortedFilteredData);
        })
        .catch((err: Error) => {
            console.error(err);
            setError(err.message);
        })
        .finally(() => {
            setLoading(false);
        });
    }, []); // Empty dependency array means this effect runs once on mount

    if (loading) return <Loader/>
    if (error) return <p>Error: {error}</p>;
    
    // if (error) return <p>Error!!!</p>
    // console.log(data)
    
    // const filteredData = data.filter((car: CarData[]) => car[1].attributes.state === 'sold')
    // const sortedFilteredData = mergeSort(filteredData);

    // Using merge sort for setting cars in the order basing on "owners_number" attribute. It's treated as "kolejność" attribute in the user's panel

    console.log(data);

    return (
        <div id="Sold">
            <div className='cards-area'>
                <h1 className='page-title pb-8'>POJAZDY, KTÓRE ZNALAZŁY JUŻ NOWEGO WŁAŚCICIELA</h1>

                {/* {sortedFilteredData.map((car: CarData[], index: number) => ( */}
                {/* {data.map((car: CarData[], index: number) => ( */}
                {data.map((car: CarData, index: number) => (
                        <Car 
                            // key={'Car no ' + index}
                            // id={car[1].id}
                            // state={car[1].attributes.state}
                            // title={car[1].attributes.title}
                            // mileage={car[1].attributes.mileage} 
                            // year={car[1].attributes.year} 
                            // fuel={car[1].attributes.fuel} 
                            // power={car[1].attributes.power} 
                            // imageSource={strapiURL + car[1].attributes.gallery.data[0].attributes.formats.small.url}

                            // key={'Car no ' + index}
                            // id={car.id}
                            // state={car.attributes.state}
                            // title={car.attributes.title}
                            // mileage={car.attributes.mileage} 
                            // year={car.attributes.year} 
                            // fuel={car.attributes.fuel} 
                            // power={car.attributes.power} 
                            // imageSource={strapiURL + car.attributes.gallery.data[0].attributes.formats.small.url}
                        />
                    )
                )}
            </div>
        </div>
    )
}