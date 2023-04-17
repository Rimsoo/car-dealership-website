import React from 'react';
import './Pages.css';

export default function Contact() {

    return (
        <div className='contact-area'>
            <span className='contact-area__form'>
                <h3>Formularz kontaktu</h3>

                <form action="https://formsubmit.co/your@email.com" method="POST">
                    <input type="text" name="name" placeholder='Imię' required/>
                    <input type="text" name="surname" placeholder='Nazwisko' required/>
                    <input type="text" name="phone" placeholder='Numer telefonu' />
                    <input type="email" name="email" placeholder='Adres e-mail' required/>
                    <textarea type="text" name="message" placeholder='Treść' required rows='4' />

                    <button type="submit">WYŚLIJ</button>
                </form>
            </span>

            <span className='contact-area__info'>
                <h3>Informacje kontaktowe</h3>
                
                <div>
                    <img src='./assets/phoneIcon.png' alt="phone_icon" />
                    <span>Telefon: +48 XXX XXX XXX</span>
                </div>
                <div>
                    <img src='./assets/email.png' alt="email_icon" />
                    <span>E-mail: xxxxxxxxxx@xxx</span>
                </div>
            </span>
        </div>
    )
}