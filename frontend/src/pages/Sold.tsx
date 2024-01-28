import Car from '../components/Car';
import Loader from '../components/Loader';
import useFetch from '../hooks/useFetch';
import mergeSort from '../hooks/mergeSort';
import './Pages.css';

const strapiURL: string = 'https://kokpit.alfamotors.pl';

// The code line below gets more than 25 records given by a default, the Strapi's limit is 100 (can't be increased)
const apiURL: string = 'https://kokpit.alfamotors.pl/api/cars?sort=date&pagination[pageSize]=200&populate=*'; 

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
    gallery: {
        data: {
            attributes: any;
        }[];
    };
}
  
interface CarData {
    id: string;
    attributes: CarAttributes;
}

export default function Sold() {
    const { loading, error, data } = useFetch(apiURL);
    
    if (loading) return <Loader/>
    if (error) return <p>Error!!!</p>
    
    const filteredData = data.filter((car: CarData[]) => car[1].attributes.state === 'sold')

    // Using merge sort for setting cars in the order basing on "owners_number" attribute. It's treated as "kolejność" atttribute in the user's panel
    const sortedFilteredData = mergeSort(filteredData);

    return (
        <div id="Sold">
            <div className='car-windows-area'>
                <h1>POJAZDY, KTÓRE ZNALAZŁY JUŻ NOWEGO WŁAŚCICIELA:</h1>

                {sortedFilteredData.map((car: CarData[], index: number) => (
                        <Car 
                            key={'Car no ' + index}
                            id={car[1].id}
                            state={car[1].attributes.state}
                            title={car[1].attributes.title}
                            mileage={car[1].attributes.mileage} 
                            year={car[1].attributes.year} 
                            fuel={car[1].attributes.fuel} 
                            power={car[1].attributes.power} 
                            // imageSource={strapiURL + car[1].attributes.gallery.data[0].attributes.url}
                            imageSource={strapiURL + car[1].attributes.gallery.data[0].attributes.formats.small.url}

                        />
                    )
                )}
            </div>
        </div>
    )
}