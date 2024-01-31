import './Financing.css';
import coins from '../assets/coins.webp';    

export default function Financing() {

    return (
        <div id='Financing'>
            <h1>FINANSOWANIE</h1>
            <div className="Financing__container">
                <img src={coins} alt='Samochody używane na leasing' />
                <ul>
                    <li>
                        Jesteśmy w stanie zorganizować wszystkie formy finansowania na bardzo korzystnych warunkach.
                    </li>
                    <li>
                        Produkty finansowe dla firm oraz osób prywatnych (leasing operacyjny, leasing finansowy, pożyczka leasingowa czy kredyt).
                    </li>
                    <li>
                        Współpracujemy z największymi bankami oraz firmami leasingowymi, co gwarantuje szeroki wybór oferty oraz kompleksową pomoc.
                    </li>
                </ul>
            </div>
        </div>
    )
}