import './Financing.css'; // You can remove this line if you are not using the original CSS file
import coins from '../assets/coins.webp';

export default function Financing() {
  return (
    <div id="Financing" className="w-800 mx-auto">
        <h1 className="font-bebasFont font-semibold text-center underline underline-2 underline-offset-8">
            FINANSOWANIE
        </h1>
      <div className="Financing__container flex">
        <img src={coins} alt="Samochody używane na leasing" className="w-400" />
        <ul className="w-400">
          <li className="my-20">
            Jesteśmy w stanie zorganizować wszystkie formy finansowania na bardzo korzystnych warunkach.
          </li>
          <li className="my-20">
            Produkty finansowe dla firm oraz osób prywatnych (leasing operacyjny, leasing finansowy, pożyczka leasingowa czy kredyt).
          </li>
          <li className="my-20">
            Współpracujemy z największymi bankami oraz firmami leasingowymi, co gwarantuje szeroki wybór oferty oraz kompleksową pomoc.
          </li>
        </ul>
      </div>
    </div>
  );
}