import Car from '../components/Car';
import Loader from '../components/Loader';
import mergeSort from '../hooks/mergeSort';
import './Pages.css';
import useFetch from '../hooks/useFetch';

const strapiURL: string = 'https://kokpit.alfamotors.pl';

// The code line below gets more than 25 records given by a default, the limit is 100. The string below used for fetching records 80-180 from db
const apiURL: string = 'https://kokpit.alfamotors.pl/api/cars?sort=date&pagination[start]=80&pagination[limit]=100&populate=*'; 

// interface CarAttributes {
//   state: string;
//   title: string;
//   mileage: number;
//   year: number;
//   fuel: string;
//   power: number;
//   gallery: {
//     data: {
//       attributes: {
//         url: string;
//       };
//     }[];
//   };
// }
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
      // {
      //   formats: {
      //     thumbnail: {
      //       url: string;
      //     }
      // };
    }[];
  };
}

interface CarData {
    id: string;
    attributes: CarAttributes;
}

export default function Offer() {
  const { loading, error, data } = useFetch(apiURL);

  if (loading) return <Loader />;
  if (error) return <p>Error!!!</p>;
  
  const filteredData = data.filter((car: CarData[]) => car[1].attributes.state !== 'sold');
  const sortedFilteredData = mergeSort(filteredData);

  return (
    <div id="Offer">
      <div className='car-windows-area'>
        <h1>SPRAWDŹ NASZĄ OFERTĘ</h1>
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
        ))}
      </div>
    </div>
  )
}
