import React from 'react';
import './Pages.css';

export default function Contact() {

    return (
        <div className='contact-area'>
            <span className='contact-area__form'>
                <h3>Formularz kontaktu</h3>

                <form action="https://formsubmit.co/alfamotors.kontakt@gmail.com" method="POST">
                    <input type="text" name="Imię" placeholder='Imię' required/>
                    <input type="text" name="Nazwisko" placeholder='Nazwisko' required/>
                    <input type="text" name="Numer telefonu" placeholder='Numer telefonu' />
                    <input type="email" name="Adres e-mail" placeholder='Adres e-mail' required/>
                    <textarea type="text" name="Wiadomość" placeholder='Treść' required rows='4' />

                    {/* Button replaced with <p> for Safari browser */}
                    <input id='contact-area__button' type='submit' value='WYŚLIJ' />

                    <input type="hidden" name="_subject" value="Klient przysłał zapytanie"></input>
                    <input type="hidden" name="_next" value="https://alfamotors.pl/thanks"></input>
                </form>
            </span>

            <span className='contact-area__info'>
                <h3>Informacje kontaktowe</h3>
                
                <div>
                    <img src={require('../assets/phoneIcon.png')} alt="Wiarygodni dealerzy samochodów używanych" />
                    <span>Telefon: +48 505 964 955</span>
                </div>
                <div>
                    <img src={require('../assets/email.png')} alt="Używane auta dobrej jakości" />
                    <span>E-mail: alfamotors.kontakt@gmail.com</span>
                </div>
                <iframe title='Map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1555473.3398993865!2d19.0236861221721!3d50.1859647846431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4717abd77be7063d%3A0x6bf2110444b3d159!2s32-200%20Miech%C3%B3w!5e0!3m2!1spl!2spl!4v1682497385509!5m2!1spl!2spl"></iframe>
            </span>        
        </div>
    )
}