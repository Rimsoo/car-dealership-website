import React from 'react';
import './Pages.css';

export default function Buy() {
    return (
        <div className='buy-area'>
            <h3>Formularz odkupu</h3>
            <p>Jeżeli są Państwo zainteresowani sprzedażą swojego samochodu, prosimy kontakt telefoniczny, lub wypełnienie i przesłanie poniższego formularza.</p>

            <form action="https://formsubmit.co/your@email.com" method="POST">
                <span className='column-inputs'>
                    <input type="text" name="name" placeholder='Imię' required/>
                    <input type="text" name="surname" placeholder='Nazwisko' required/>
                    <input type="text" name="phone" placeholder='Numer telefonu' />
                    <input type="email" name="email" placeholder='Adres e-mail' required/>
                    <input type="text" name="cena" placeholder='Proponowana cena (opcjonalnie)'/>
                </span>

                <span className='column-inputs'>
                    <input type="text" name="model" placeholder='Model' required/>
                    <input type="text" name="rok" placeholder='Rok' required/>
                    <input type="text" name="paliwo" placeholder='Paliwo' required/>
                    <input type="text" name="przebieg" placeholder='Przebieg' required/>
                    <input type="text" name="marka" placeholder='Marka' required/>
                </span>

                <span id='third-span'>
                    <textarea type="text" name="message" placeholder='Treść' required rows='4' />
                    <button type="submit">WYŚLIJ</button>
                </span>
            </form>
        </div>
    )
}