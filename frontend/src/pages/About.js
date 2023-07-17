import React from 'react';
import './Pages.css';    

export default function About() {

    return (
        <div id="About">
            <h1>O nas</h1>

            <div className="About__box">
                <h2>Historia</h2>
                <p>
                    <span>ALFA MOTORS</span> to rodzinna firma specjalizująca się w sprzedaży luksusowych samochodów marek premium, której tradycja sięga już prawie trzydziestu lat.
                </p>
                <p>
                    Powstała z pasji do motoryzacji, gdzie doświadczenie i wiedza o samochodach została przekazana z pokolenia na pokolenie.
                </p>
            </div>

            <div className="About__box">
                <h2>Cel</h2>
                <p>
                    Naszym głównym założeniem jest indywidualne, szczere i uczciwe podejście do każdego klienta, aby świadomie wybrał najlepszy dla siebie samochód.
                </p>
                <p>
                    Większość naszych Klientów po udanej pierwszej transakcji, wraca do nas po kolejny pewny zakup oraz rekomenduje nasze usługi dalej.
                </p>
            </div>

            <div className="About__box">
                <h2>Podstawa działalności</h2>
                <p>
                    Wszystkie samochody są naszą własnością. Decyzja o zakupie poprzedzona jest zawsze gruntownym sprawdzeniem pojazdu oraz spełnieniem ostrych kryteriów selekcyjnych.
                </p>
                <p>
                    <span>Kupujemy jedynie takie egzemplarze, które mają w pełni udokumentowaną historię użytkowania i serwisowania, są bezwypadkowe oraz często posiadają fabryczną gwarancję.</span>
                </p>
                <p>
                    <span>Samochody wyłącznie krajowe, zakupione w polskich salonach autoryzowanych dealerów.</span>
                </p>
            </div>

            <div className="About__box">
                <h2>Zmiana samochodu - kompleksowe podejście</h2>
                <p>
                    Podchodzimy kompleksowo do zagadnienia jakim jest zmiana samochodu przez potencjalnego Klienta:
                </p>
                <ul>
                    <li>zapewniamy doradztwo w wyborze marki i modelu, który będzie spełniał Państwa oczekiwania</li>
                    <li>wyszukujemy pojazdy na Państwa zlecenie według konkretnych wymagań</li>
                    <li>jeżeli posiadacie Państwo pojazd w bardzo dobrym stanie, możemy go odkupić lub wziąć w rozliczeniu za samochód z naszej oferty</li>
                    <li>organizujemy bardzo korzystne finansowanie dla firm, jak również dla osób prywatnych.</li>
                </ul>
            </div>
            
            <h3>Zapraszamy do kontaktu przez formularz, mailowo lub telefonicznie!</h3>
        </div>
    )
}