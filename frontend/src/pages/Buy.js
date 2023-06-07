import React from 'react';
import './Pages.css';

export default function Buy() {
    return (
        <div className='buy-area'>
            <h3>Formularz odkupu</h3>
            <p>Jeżeli są Państwo zainteresowani sprzedażą swojego samochodu, prosimy kontakt telefoniczny, lub wypełnienie i przesłanie poniższego formularza.</p>

            <form action="https://formsubmit.co/alfamotors.kontakt@gmail.com" method="POST">
                <span className='column-inputs'>
                    <input type="text" name="Imię" placeholder='Imię' required/>
                    <input type="text" name="Nazwisko" placeholder='Nazwisko' required/>
                    <input type="text" name="Numer telefonu" placeholder='Numer telefonu' />
                    <input type="email" name="Adres e-mail" placeholder='Adres e-mail' required/>
                    <input type="text" name="Cena" placeholder='Proponowana cena (opcjonalnie)'/>
                </span>

                <span className='column-inputs'>
                    <input type="text" name="Model" placeholder='Model' required/>
                    <input type="text" name="Rok" placeholder='Rok' required/>
                    <input type="text" name="Paliwo" placeholder='Paliwo' required/>
                    <input type="text" name="Przebieg" placeholder='Przebieg' required/>
                    <input type="text" name="Marka" placeholder='Marka' required/>
                </span>

                <span id='third-span'>
                    <textarea type="text" name="message" placeholder='Treść' required rows='4' />
                    <button type="submit">WYŚLIJ</button>
                </span>

                <input type="hidden" name="_subject" value="Oferta od klienta"></input>
                <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html"></input>
            </form>
        </div>
    )
}