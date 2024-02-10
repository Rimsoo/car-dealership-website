export default function Buy() {
    return (
        <div id="Buy" className="pt-8 pb-24 font-bebasFont">
            <div id="Buy__area" className="h-[870px] w-64 mx-auto bg-gray-200 shadow-custom-gray">
                <h3 className="page-title pt-4">Formularz odkupu</h3>
                <p className="p-2 pb-4 font-sans">Jeżeli są Państwo zainteresowani sprzedażą swojego samochodu, prosimy o kontakt telefoniczny lub wypełnienie i przesłanie poniższego formularza z uwzględnieniem podstawowych danych pojazdu, własnym opisem oraz poglądowymi zdjęciami.</p>

                {/* enctype has been set for sending images */}
                <form className="" action="https://formsubmit.co/alfamotors.kontakt@gmail.com" method="POST" encType="multipart/form-data"> 
                    <div className='column-inputs'>
                        <input className="buy__area__form__input" type="text" name="Imię" placeholder='Imię' required/>
                        <input className="buy__area__form__input" type="text" name="Nazwisko" placeholder='Nazwisko' required/>
                        <input className="buy__area__form__input" type="text" name="Numer telefonu" placeholder='Numer telefonu' />
                        <input className="buy__area__form__input" type="email" name="Adres e-mail" placeholder='Adres e-mail' required/>
                        <input className="buy__area__form__input" type="text" name="Cena" placeholder='Proponowana cena'/>
                    </div>

                    <div className='w-full" '>
                        <input className="buy__area__form__input" type="text" name="Marka i model" placeholder='Marka i model' required/>
                        <input className="buy__area__form__input" type="text" name="Rok produkcji" placeholder='Rok produkcji' required/>
                        <input className="buy__area__form__input" type="text" name="Wersja silnikowa" placeholder='Wersja silnikowa' required/>
                        <input className="buy__area__form__input" type="text" name="Przebieg" placeholder='Przebieg' required/>
                        <input className="buy__area__form__input" type="text" name="Kraj" placeholder='Kraj pochodzenia' required/>
                    </div>

                    <div className="flex flex-wrap w-full">
                        <textarea className="buy__area__form__input" name="Wiadomość" placeholder='Własny opis pojazdu/komentarz/uwagi' required rows={4} />

                        {/* Attaching images by a visitor */}
                        <span id='third-span__attachments'>
                            <input className="buy__area__form__input" type="file" name="Załącznik 1" accept="image/png, image/jpeg"/>
                            <input className="buy__area__form__input" type="file" name="Załącznik 2" accept="image/png, image/jpeg"/>
                            <input className="buy__area__form__input" type="file" name="Załącznik 3" accept="image/png, image/jpeg"/>
                        </span>    

                        {/* Button replaced with <input> for Safari browser */}
                        <input className="buy__area__form__input block border-2 mx-auto max-w-16 tracking-wide bg-white border-black rounded-md border-black rounded-md block mx-autoduration-1000 transition-colors cursor-pointer
                        hover:bg-black hover:text-white" type='submit' value='WYŚLIJ' />
                    </div>

                    <input className="buy__area__form__input" type="hidden" name="_subject" value="Oferta od klienta"></input>
                    <input className="buy__area__form__input" type="hidden" name="_next" value="https://alfamotors.pl/thanks"></input>
                </form>
            </div>
        </div>
    )
}