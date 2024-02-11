export default function Buy() {
    return (
        <div id="Buy" className="pt-8 pb-32 font-bebasFont">
            <div className="max-w-72 w-10/12 px-2 pb-8 mx-auto bg-gray-200 shadow-custom-gray
            sm:max-w-none">
                <h3 className="page-title pt-4 pb-2">Formularz odkupu</h3>
                <p className="p-2 pb-5 font-sans">Jeżeli są Państwo zainteresowani sprzedażą swojego samochodu, prosimy o kontakt telefoniczny lub wypełnienie i przesłanie poniższego formularza z uwzględnieniem podstawowych danych pojazdu, własnym opisem oraz poglądowymi zdjęciami.</p>

                {/* enctype has been set for sending images */}
                <form className="sm:" action="https://formsubmit.co/alfamotors.kontakt@gmail.com" method="POST" encType="multipart/form-data"> 
                    <div className=''>
                        <input className="buy__area__form__input" type="text" name="Imię" placeholder='Imię' required/>
                        <input className="buy__area__form__input" type="text" name="Nazwisko" placeholder='Nazwisko' required/>
                        <input className="buy__area__form__input" type="text" name="Numer telefonu" placeholder='Numer telefonu' />
                        <input className="buy__area__form__input" type="email" name="Adres e-mail" placeholder='Adres e-mail' required/>
                        <input className="buy__area__form__input" type="text" name="Cena" placeholder='Proponowana cena'/>
                    </div>

                    <div className=''>
                        <input className="buy__area__form__input" type="text" name="Marka i model" placeholder='Marka i model' required/>
                        <input className="buy__area__form__input" type="text" name="Rok produkcji" placeholder='Rok produkcji' required/>
                        <input className="buy__area__form__input" type="text" name="Wersja silnikowa" placeholder='Wersja silnikowa' required/>
                        <input className="buy__area__form__input" type="text" name="Przebieg" placeholder='Przebieg' required/>
                        <input className="buy__area__form__input" type="text" name="Kraj" placeholder='Kraj pochodzenia' required/>
                    </div>

                    <div className="w-full">
                        <textarea className="buy__area__form__input" name="Wiadomość" placeholder='Własny opis pojazdu/komentarz/uwagi' required rows={4} />

                        {/* Attachments inputs */}
                        <div className="block w-40 mt-4 mx-auto">
                            <input className="buy__area__form__input text-sm" type="file" name="Załącznik 1" accept="image/png, image/jpeg"/>
                            <input className="buy__area__form__input text-sm" type="file" name="Załącznik 2" accept="image/png, image/jpeg"/>
                            <input className="buy__area__form__input text-sm" type="file" name="Załącznik 3" accept="image/png, image/jpeg"/>
                        </div>    

                        {/* Button replaced with <input> for Safari browser */}
                        <input className="block w-20 h-8 mt-4 mx-auto text-lg tracking-wide bg-white border-2 border-black rounded-md border-black rounded-md block mx-autoduration-1000 transition-colors cursor-pointer
                        hover:bg-black hover:text-white" type='submit' value='WYŚLIJ' />
                    </div>

                    <input className="buy__area__form__input" type="hidden" name="_subject" value="Oferta od klienta"></input>
                    <input className="buy__area__form__input" type="hidden" name="_next" value="https://alfamotors.pl/thanks"></input>
                </form>
            </div>
        </div>
    )
}