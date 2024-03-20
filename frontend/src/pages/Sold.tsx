import Car from '../components/Car';
import Loader from '../components/Loader';

const strapiURL: string = 'https://kokpit.alfamotors.pl';

    // Local:
// const strapiURL = 'http://localhost:1337';
// const apiURL = 'http://localhost:1337/api/cars?populate=*'; 

export default function Sold(props: any) {

    return (
        <div id="Sold">
            <div className='cards-area'>
                <h1 className='page-title pb-8'>POJAZDY, KTÓRE ZNALAZŁY JUŻ NOWEGO WŁAŚCICIELA</h1>
                <div>{props.arrayToDisplay}</div>
{/* 
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
                )} */}
            </div>
        </div>
    )
}