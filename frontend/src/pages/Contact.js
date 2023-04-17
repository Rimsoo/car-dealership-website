import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

export default function Contact() {

    return (
        <div className='contact-area'>
            <span className='contact-area__form'>
                <h2>Formularz kontaktu</h2>

                <form action="https://formsubmit.co/your@email.com" method="POST">
                    <input type="text" name="name" placeholder='Imię' required/>
                    <input type="text" name="surname" placeholder='Nazwisko' required/>
                    <input type="text" name="phone" placeholder='Numer telefonu' />
                    <input type="email" name="email" placeholder='Adres e-mail' required/>
                    <input type="text" name="txt" placeholder='Treść' required/>

                    <button type="submit">Wyślij</button>
                </form>
            </span>

            <span className='contact-area__info'>
                <h3>Informacje kontaktowe</h3>
                
                <img />
                <p>Telefon: +48 XXX XXX XXX</p>

                <img />
                <p>E-mail: xxxxxxxxxx@xxx</p>
            </span>
        </div>
    )
}