export default function About() {
    return (
        <div id="About" className="mx-auto w-[90vw] pb-[80px] font-bebasFont
        lg:w-[1000px] lg:pb-[50px]">
            <h1 className="py-3 mb-0 text-center text-4xl font-medium underline underline-offset-[8px]">O nas</h1>

            <div className="mb-[20px]">
                <h2 className="text-[35px] font-medium underline underline-offset-[4px] mb-[4px]">Historia</h2>
                <p>
                    <span className="font-bold">ALFA MOTORS</span> to rodzinna firma specjalizująca się w sprzedaży luksusowych samochodów marek premium, której tradycja sięga już prawie trzydziestu lat.
                </p>
                <p>
                    Powstała z pasji do motoryzacji, gdzie doświadczenie i wiedza o samochodach została przekazana z pokolenia na pokolenie.
                </p>
            </div>

            <div className="mb-[20px]">
                <h2 className="text-[35px] font-medium underline underline-offset-[4px] mb-[4px]">Cel</h2>
                <p>
                    Naszym głównym założeniem jest indywidualne, szczere i uczciwe podejście do każdego klienta, aby świadomie wybrał najlepszy dla siebie samochód.
                </p>
                <p>
                    Większość naszych Klientów po udanej pierwszej transakcji, wraca do nas po kolejny pewny zakup oraz rekomenduje nasze usługi dalej.
                </p>
            </div>

            <div className="mb-[20px]">
                <h2 className="text-[35px] font-medium underline underline-offset-[4px] mb-[4px]">Podstawa działalności</h2>
                <p>
                    Wszystkie samochody są naszą własnością. Decyzja o zakupie poprzedzona jest zawsze gruntownym sprawdzeniem pojazdu oraz spełnieniem ostrych kryteriów selekcyjnych.
                </p>
                <p>
                    <span className="font-bold">Kupujemy jedynie takie egzemplarze, które mają w pełni udokumentowaną historię użytkowania i serwisowania, są bezwypadkowe oraz często posiadają fabryczną gwarancję.</span>
                </p>
                <p>
                    <span className="font-bold">Samochody wyłącznie krajowe, zakupione w polskich salonach autoryzowanych dealerów.</span>
                </p>
            </div>

            <div className="mb-[20px]">
                <h2 className="text-[35px] font-medium underline underline-offset-[4px] mb-[4px]">Zmiana samochodu - kompleksowe podejście</h2>
                <p>
                    Podchodzimy kompleksowo do zagadnienia jakim jest zmiana samochodu przez potencjalnego Klienta:
                </p>
                <ul className="list-disc pl-[25px] m-[3px]">
                    <li>zapewniamy doradztwo w wyborze marki i modelu, który będzie spełniał Państwa oczekiwania</li>
                    <li>wyszukujemy pojazdy na Państwa zlecenie według konkretnych wymagań</li>
                    <li>jeżeli posiadacie Państwo pojazd w bardzo dobrym stanie, możemy go odkupić lub wziąć w rozliczeniu za samochód z naszej oferty</li>
                    <li>organizujemy bardzo korzystne finansowanie dla firm, jak również dla osób prywatnych.</li>
                </ul>
            </div>
            
            <h3 className="text-center text-[28px] font-medium my-[20px] mx-auto">Zapraszamy do kontaktu przez formularz, mailowo lub telefonicznie!</h3>
        </div>
    );
}