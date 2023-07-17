import React from 'react';
import './CarPage.css';
import useFetch from '../hooks/useFetch';
import ImageSlider from '../components/ImageSlider';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const strapiURL = 'https://kokpit.alfamotors.pl/';

// The one below should get more than 25 given by a default
const apiURL = 'https://kokpit.alfamotors.pl/api/cars?sort=date&pagination[pageSize]=200&populate=*'; 

// const strapiURL = 'http://localhost:1337';
// const apiURL = 'http://localhost:1337/api/cars?populate=*'; 

export default function CarPage() {
    const { loading, error, data } = useFetch(apiURL);
    const { id } = useParams();
    let imagesURLs = []; // here will be stored URLs of images
    let idCar = Number(id); // turninig string into number

    function isThatCar(fetchedCar) {
        return fetchedCar[1].id === idCar;
    }
    
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!!!</p>

    let foundCar = data.find(isThatCar);
    
    foundCar[1].attributes.gallery.data.map(car => (
        imagesURLs.push(strapiURL + car.attributes.url)
    ));

    return (
        <div className='CarPage'>
            <h1 className='CarPage__price__area'>
                {foundCar[1].attributes.title}

                <span className='CarPage__price__area' style={
                    foundCar[1].attributes.state==='sold' || 
                    foundCar[1].attributes.state==='soon' ? {display: 'none'} : {}
                }>
                    <span className='CarPage__price__area__dash'>{foundCar[1].attributes.price ? ' - ' : ''}</span> 
                    <span className='CarPage__price__area__number'>
                        {foundCar[1].attributes.state==='zarezerwowane' ? 
                        'ZAREZERWOWANE' : 
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