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
                    <img src={require('../assets/phoneIcon.png')} alt="phone_icon" />
                    <span>Telefon: +48 XXX XXX XXX</span>
                </div>
                <div>
                    <img src={require('../assets/email.png')} alt="email_icon" />
                    <span>E-mail: xxxxxxxxxx@xxx</span>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1555473.3398993865!2d19.0236861221721!3d50.1859647846431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4717abd77be7063d%3A0x6bf2110444b3d159!2s32-200%20Miech%C3%B3w!5e0!3m2!1spl!2spl!4v1682497385509!5m2!1spl!2spl"></iframe>
            </span>        
        </div>
    )
}