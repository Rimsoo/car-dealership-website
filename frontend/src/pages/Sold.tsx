import Car from '../components/Car';
import Loader from '../components/Loader';
import useFetch from '../hooks/useFetch';
import mergeSort from '../hooks/mergeSort';

const strapiURL: string = 'https://kokpit.alfamotors.pl';

// The code lines below get more than 25 records given by a default, the Strapi's limit is 100 (can't be increased)
const apiURL1: string = 'https://kokpit.alfamotors.pl/api/cars?sort=date&pagination[pageSize]=100&populate=*';
const apiURL2: string = 'https://kokpit.alfamotors.pl/api/cars?sort=date&pagination[start]=100&pagination[limit]=100&populate=*'; 


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
    const fetchedObject1 = useFetch(apiURL1);
    const fetchedObject2 = useFetch(apiURL2);
    
    if (fetchedObject1.loading || fetchedObject2.loading) return <Loader/>
    if (fetchedObject1.error || fetchedObject2.error) return <p>Error!!!</p>

    const combinedData = [...fetchedObject1.data, ...fetchedObject2.data];
    const filteredData = combinedData.filter((car: CarData[]) => car[1].attributes.state === 'sold')

    // Using merge sort for setting cars in the order basing on "owners_number" attribute. It's treated as "kolejność" atttribute in the user's panel
    const sortedFilteredData = mergeSort(filteredData);

    return (
        <div id="Sold">
            <div className='cards-area'>
                <h1 className='page-title pb-8'>POJAZDY, KTÓRE ZNALAZŁY JUŻ NOWEGO WŁAŚCICIELA</h1>

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
                            imageSource={strapiURL + car[1].attributes.gallery.data[0].attributes.formats.small.url}
                        />
                    )
                )}
            </div>
        </div>
    )
}