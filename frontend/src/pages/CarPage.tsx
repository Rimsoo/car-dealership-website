import './CarPage.css';
import useFetch from '../hooks/useFetch';
import ImageSlider from '../components/ImageSlider';
import Loader from '../components/Loader';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const strapiURL = 'https://kokpit.alfamotors.pl/';
const apiURL = 'https://kokpit.alfamotors.pl/api/cars?sort=date&pagination[start]=12&pagination[limit]=100&populate=* ';

    // Local
// const strapiURL = 'http://localhost:1337';
// const apiURL = 'http://localhost:1337/api/cars?populate=*';

interface CarAttributes {
    title: string;
    state: string;
    price?: number;
    year: number;
    mileage: number;
    fuel: string;
    power: number;
    engine_size: string;
    doors: number;
    seats?: number;
    gearbox: string;
    drive: string;
    body: string;
    color: string;
    country: string;
    first_registration: string;
    vin: string;
    gallery: {
        data: {
            attributes: {
                url: string;
            };
        }[];
    };
    description: string;
}

interface Car {
    id: number;
    attributes: CarAttributes;
}

interface StrapiCar {
    0: string;
    1: Car;
}

interface ImageAttributes {
    alternativeText: null;
    caption: null;
    createdAt: string;
    ext: string;
    formats: any;
    hash: string;
    height: number;
    mime: string;
    name: string;
    previewUrl: null;
    provider: string;
    provider_metadata: null;
    size: number;
    updatedAt: string;
    url: string;
    width: number;
}

interface Image {
    attributes: ImageAttributes;
    id: number;
  }

export default function CarPage() {
    const { id } = useParams();
    // IDs of cars are not like the order due to deleted records (e.g. first record from db has ID = 12). This why the program uses pagination
    let pagination: number = Number(id) - 20; // TS doesn't accept substracting number from string
    if (pagination < 0) pagination = 0;
    const apiURL = 'https://kokpit.alfamotors.pl/api/cars?sort=date&pagination[start]=' + pagination + '&pagination[limit]=100&populate=* '; 
    
    const { loading, error, data } = useFetch(apiURL);
    let imagesURLs: string[] = []; // here will be stored URLs of images
    let idCar: number = Number(id); // turninig string into number

    // A function checking if ID in URL is same as currently checked car from db
    function isThatCar(fetchedCar: Car[]) {
        console.log(fetchedCar[1])
        return fetchedCar[1].id === idCar;
    }
    
    if (loading) return <Loader />
    if (error) return <p>Error!!!</p>

    // let foundCar: StrapiCar | undefined = data.find(isThatCar);
    let foundCar: any = data.find(isThatCar);

    // Collecting an array of car's images
    if (foundCar && foundCar[1]) {    
        foundCar[1].attributes.gallery.data.map((image: Image) => (
            imagesURLs.push(strapiURL + image.attributes.formats.large.url)
        ));
    } else {
        // if url has ID which is not in db
        return <h3 style={{textAlign: 'center', marginTop: 50}}>Brak samochodu o takim ID</h3>
    }

    return (
        <div className='CarPage pb-64'>
            <h1 className='py-4 px-2 font-bebasFont text-2xl text-center'>
                {foundCar[1].attributes.title + ' '}
                <span className='CarPage__price__area font-medium sm:inline-block' style={
                    foundCar[1].attributes.state==='sold' || 
                    foundCar[1].attributes.state==='soon' ? {display: 'none'} : {}
                }>
                    <span className='CarPage__price__area__dash px-1'>{foundCar[1].attributes.price ? ` - ` : ' '}</span> 
                    <span className='CarPage__price__area__number'>
                        {foundCar[1].attributes.state==='zarezerwowane' ? 
                        ' - ZAREZERWOWANE' : 
                        foundCar[1].attributes.price + ' PLN'}
                    </span>
                </span>
            </h1>

            {/* Mini slider */}
            <ImageSlider id='ImageSlider' slides={imagesURLs} />

            <table className='CarPage__table relative top-16 w-90vw max-w-sm mx-auto bg-gray-100 border border-black shadow-car-page-shadow text-[15px] font-medium'>
                <tbody>
                    <tr className="CarPage__table__body__row">
                        <td className="CarPage__table__body__row__cell-first">Rok produkcji:</td>
                        <td className="CarPage__table__body__row__cell-second">{foundCar[1].attributes.year}</td>
                    </tr>
                    <tr className="CarPage__table__body__row">
                        <td className="CarPage__table__body__row__cell-first">Przebieg:</td>
                        <td className="CarPage__table__body__row__cell-second">{foundCar[1].attributes.mileage} km</td>
                    </tr>
                    <tr className="CarPage__table__body__row">
                        <td className="CarPage__table__body__row__cell-first">Paliwo:</td>
                        <td className="CarPage__table__body__row__cell-second">{foundCar[1].attributes.fuel}</td>
                    </tr>
                    <tr className="CarPage__table__body__row">
                        <td className="CarPage__table__body__row__cell-first">Moc silnika:</td>
                        <td className="CarPage__table__body__row__cell-second">{foundCar[1].attributes.power} KM</td>
                    </tr>
                    <tr className="CarPage__table__body__row">
                        <td className="CarPage__table__body__row__cell-first">Poj. silnika:</td>
                        <td className="CarPage__table__body__row__cell-second">{foundCar[1].attributes.engine_size}</td>
                    </tr>
                    <tr className="CarPage__table__body__row">
                        <td className="CarPage__table__body__row__cell-first">Liczba drzwi:</td>
                        <td className="CarPage__table__body__row__cell-second">{foundCar[1].attributes.doors}</td>
                    </tr>
                    <tr className="CarPage__table__body__row">
                        <td className="CarPage__table__body__row__cell-first">Liczba miejsc:</td>
                        <td className="CarPage__table__body__row__cell-second">{foundCar[1].attributes.seats}</td>
                    </tr>
                    <tr className="CarPage__table__body__row">
                        <td className="CarPage__table__body__row__cell-first">Skrzynia biegów:</td>
                        <td className="CarPage__table__body__row__cell-second">{foundCar[1].attributes.gearbox}</td>
                    </tr>
                    <tr className="CarPage__table__body__row">
                        <td className="CarPage__table__body__row__cell-first">Napęd:</td>
                        <td className="CarPage__table__body__row__cell-second">{foundCar[1].attributes.drive}</td>
                    </tr>
                    <tr className="CarPage__table__body__row">
                        <td className="CarPage__table__body__row__cell-first">Nadwozie:</td>
                        <td className="CarPage__table__body__row__cell-second">{foundCar[1].attributes.body}</td>
                    </tr>
                    <tr className="CarPage__table__body__row">
                        <td className="CarPage__table__body__row__cell-first">Kolor:</td>
                        <td className="CarPage__table__body__row__cell-second">{foundCar[1].attributes.color}</td>
                    </tr>
                    <tr className="CarPage__table__body__row">
                        <td className="CarPage__table__body__row__cell-first">Kraj pochodzenia:</td>
                        <td className="CarPage__table__body__row__cell-second">{foundCar[1].attributes.country}</td>
                    </tr>
                    <tr className="CarPage__table__body__row">
                        <td className="CarPage__table__body__row__cell-first">Data pierwszej rejestracji:</td>
                        <td className="CarPage__table__body__row__cell-second">{foundCar[1].attributes.first_registration}</td>
                    </tr>
                    <tr className="CarPage__table__body__row">
                        <td className="CarPage__table__body__row__cell-first">Forma sprzedaży:</td>
                        <td className="CarPage__table__body__row__cell-second">{foundCar[1].attributes.vin}</td>
                    </tr>
                </tbody>
            </table>

            <div className='CarPage__description relative top-32 w-90vw max-w-[1080px] mx-auto bg-gray-100 shadow-car-page-shadow'>
                <div className="pt-3 pb-7 font-medium text-3xl text-center underline underline-offset-[12px]">Opis pojazdu</div>
                <ReactMarkdown className='px-2'>
                    {foundCar[1].attributes.description}
                </ReactMarkdown>
            </div>
        </div>
    )
}