import React from 'react';
import './CarPage.css';
import useFetch from '../hooks/useFetch';
import ImageSlider from '../components/ImageSlider';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const strapiURL = 'http://localhost:1337';
const apiURL = 'http://localhost:1337/api/cars?populate=*'; 

export default function CarPage() {
    const { loading, error, data } = useFetch(apiURL);
    const { id } = useParams();
    let imagesURLs = []; // here will be stored URLs of images
    let idNumber = Number(id) - 1;

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!!!</p>

    data[idNumber][1].attributes.gallery.data.map(car => (
        imagesURLs.push(strapiURL + car.attributes.url)
    ));

    console.log(imagesURLs);
    console.log(imagesURLs.length);

    return (
        <div className='CarPage'>
            <h1>{data[idNumber][1].attributes.title}<span className='price'>{data[idNumber][1].attributes.price ? ' - ' : ''} {data[idNumber][1].attributes.price} PLN</span></h1>

            {/* <img src={imagesURLs[0]}></img> */}
            <ImageSlider id='ImageSlider' slides={imagesURLs} />

            <table className='CarPage__table'>
                <tr>
                    <td>Rok produkcji:</td>
                    <td>{data[idNumber][1].attributes.year}</td>
                </tr>
                <tr>
                    <td>Przebieg:</td>
                    <td>{data[idNumber][1].attributes.mileage}</td>
                </tr>
                <tr>
                    <td>Paliwo:</td>
                    <td>{data[idNumber][1].attributes.fuel}</td>
                </tr>
                <tr>
                    <td>Moc silnika:</td>
                    <td>{data[idNumber][1].attributes.power}</td>
                </tr>
                <tr>
                    <td>Poj. silnika:</td>
                    <td>{data[idNumber][1].attributes.engine_size}</td>
                </tr>
                <tr>
                    <td>Liczba drzwi:</td>
                    <td>{data[idNumber][1].attributes.doors}</td>
                </tr>
                <tr>
                    <td>Liczba miejsc:</td>
                    <td>{data[idNumber][1].attributes.seats}</td>
                </tr>
                <tr>
                    <td>Skrzynia biegów:</td>
                    <td>{data[idNumber][1].attributes.gearbox}</td>
                </tr>
                <tr>
                    <td>Napęd:</td>
                    <td>{data[idNumber][1].attributes.drive}</td>
                </tr>
                <tr>
                    <td>Nadwozie:</td>
                    <td>{data[idNumber][1].attributes.body}</td>
                </tr>
                <tr>
                    <td>Kolor:</td>
                    <td>{data[idNumber][1].attributes.color}</td>
                </tr>
                <tr>
                    <td>Kraj pochodzenia:</td>
                    <td>{data[idNumber][1].attributes.country}</td>
                </tr>
                <tr>
                    <td>Data pierwszej rejestracji:</td>
                    <td>{data[idNumber][1].attributes.first_registration}</td>
                </tr>
                <tr>
                    <td>Liczba właścicieli:</td>
                    <td>{data[idNumber][1].attributes.owners_number}</td>
                </tr>
                <tr>
                    <td>VIN:</td>
                    <td>{data[idNumber][1].attributes.vin}</td>
                </tr>
            </table>

            {/* <span className='equipment'>
            </span> */}
            <div className='CarPage__description'>
                <div id='description-title'>Opis pojazdu</div>
                <ReactMarkdown className='CarPage__description__text'>
                    {data[idNumber][1].attributes.description}
                </ReactMarkdown>
            </div>
        </div>
    )
}

// ID
// Stan     <CENA> || wkrótce || sprzedane
// Tytuł        
// Marka	 Kia
// Model	 Stinger
// Wersja	 GT
// INTEGER Przebieg (KM)	 69000
// Rocznik	 2019
// Rodzaj paliwa	 Benzyna
// Pojemność silnika	 1.8
// INTEGER Moc (KM)	 366
// Skrzynia biegów	 Automatyczna
// Kolor	 Czarny ???
// ??? Kraj pochodzenia	 Polska ???
// Pierwsza rejestracja	 05.2019
// ??? napęd tył ???
// INTEGER ??? liczba drzwi 5???
// INTEGER ??? liczba miejsc 5???
// ??? VIN xxxxxxxxxxx ???
// OPIS
// WYPOSAŻENIE

// In relational database:
// ZDJĘCIA

// ==== DANE ====
// ROK PRODUKCJI:
// 2016
// NADWOZIE:
// SEDAN (LIMUZYNA)
// PALIWO:
// BENZYNA
// POJ. SILNIKA:
// 3.0
// MOC SILNIKA:
// 367 KM
// PRZEBIEG:
// 131 000 KM
// SKRZYNIA BIEGÓW:
// AUTOMATYCZNA
// NAPĘD:
// 4X4 (AWD)_PERMANENT
// LICZBA DRZWI:
// 5
// LICZBA MIEJSC:
// 5
// LICZBA WŁAŚCICIELI:
// 3
// PIERWSZA REJESTRACJA:
// 2016-01-01
// KRAJ POCHODZENIA:
// KOLOR:
// SZARY
// VIN:
// 55SWF6EB0GU141859