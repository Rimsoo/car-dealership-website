import './CarPage.css';
import useFetch from '../hooks/useFetch';
import ImageSlider from '../components/ImageSlider';
import Loader from '../components/Loader';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const strapiURL = 'https://kokpit.alfamotors.pl/';

// The one below should get more than 25 given by a default
const apiURL = 'https://kokpit.alfamotors.pl/api/cars?sort=date&pagination[pageSize]=200&populate=*'; 

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
    const { loading, error, data } = useFetch(apiURL);
    const { id } = useParams();
    let imagesURLs: string[] = []; // here will be stored URLs of images
    let idCar: number = Number(id); // turninig string into number

    
    function isThatCar(fetchedCar: Car[]) {
        // Checking if ID in URL is same as currently checked car from db
        return fetchedCar[1].id === idCar;
    }
    
    if (loading) return <Loader />
    if (error) return <p>Error!!!</p>

    // let foundCar: StrapiCar | undefined = data.find(isThatCar);
    let foundCar: any = data.find(isThatCar);

    if (foundCar && foundCar[1]) {    
        foundCar[1].attributes.gallery.data.map((image: Image) => (
            imagesURLs.push(strapiURL + image.attributes.url)
        ));
    } else {
        // if url has ID which is not in db
        return <p>No car with such ID</p>
    }

    return (
        <div className='CarPage'>
            <h1 className='CarPage__price__area CarPage__price__area-header'>
                {foundCar[1].attributes.title}

                <span className='CarPage__price__area' style={
                    foundCar[1].attributes.state==='sold' || 
                    foundCar[1].attributes.state==='soon' ? {display: 'none'} : {}
                }>
                    <span className='CarPage__price__area__dash'>{foundCar[1].attributes.price ? ' - ' : ''}</span> 
                    <span className='CarPage__price__area__number'>
                        {foundCar[1].attributes.state==='zarezerwowane' ? 
                        ' - ZAREZERWOWANE' : 
                        foundCar[1].attributes.price + ' PLN'}
                    </span>
                </span>
            </h1>

            <ImageSlider id='ImageSlider' slides={imagesURLs} />

            <table className='CarPage__table'>
                <tbody>
                    <tr>
                        <td>Rok produkcji:</td>
                        <td>{foundCar[1].attributes.year}</td>
                    </tr>
                    <tr>
                        <td>Przebieg:</td>
                        <td>{foundCar[1].attributes.mileage} km</td>
                    </tr>
                    <tr>
                        <td>Paliwo:</td>
                        <td>{foundCar[1].attributes.fuel}</td>
                    </tr>
                    <tr>
                        <td>Moc silnika:</td>
                        <td>{foundCar[1].attributes.power} KM</td>
                    </tr>
                    <tr>
                        <td>Poj. silnika:</td>
                        <td>{foundCar[1].attributes.engine_size}</td>
                    </tr>
                    <tr>
                        <td>Liczba drzwi:</td>
                        <td>{foundCar[1].attributes.doors}</td>
                    </tr>
                    <tr>
                        <td>Liczba miejsc:</td>
                        <td>{foundCar[1].attributes.seats}</td>
                    </tr>
                    <tr>
                        <td>Skrzynia biegów:</td>
                        <td>{foundCar[1].attributes.gearbox}</td>
                    </tr>
                    <tr>
                        <td>Napęd:</td>
                        <td>{foundCar[1].attributes.drive}</td>
                    </tr>
                    <tr>
                        <td>Nadwozie:</td>
                        <td>{foundCar[1].attributes.body}</td>
                    </tr>
                    <tr>
                        <td>Kolor:</td>
                        <td>{foundCar[1].attributes.color}</td>
                    </tr>
                    <tr>
                        <td>Kraj pochodzenia:</td>
                        <td>{foundCar[1].attributes.country}</td>
                    </tr>
                    <tr>
                        <td>Data pierwszej rejestracji:</td>
                        <td>{foundCar[1].attributes.first_registration}</td>
                    </tr>
                    <tr>
                        <td>Forma sprzedaży:</td>
                        <td>{foundCar[1].attributes.vin}</td>
                    </tr>
                </tbody>
            </table>

            <div className='CarPage__description'>
                <div id='description-title'>Opis pojazdu</div>
                <ReactMarkdown className='CarPage__description__text'>
                    {foundCar[1].attributes.description}
                </ReactMarkdown>
            </div>
        </div>
    )
}