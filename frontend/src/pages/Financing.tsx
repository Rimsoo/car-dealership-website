import coins from '../assets/financing/coins.webp';

export default function Financing() {
    return (
        <div id='Financing' className="w-[90vw] mx-auto pb-[80px] 
        lg:w-[800px] lg:pb-12">
            <h1 className="page-title py-5">
                FINANSOWANIE
            </h1>
            <div className="box-border w-full items-center p-5 pt-0 flex flex-col-reverse 
            lg:flex-row">
                <img src={coins} alt='Pomoc w uzyskaniu leasingu na samochód' className="w-4/5 lg:w-[400px]"/>
                <ul className="w-4/5 list-disc pl-8 lg:w-[400px]">
                    <li className="financing__options">
                        Jesteśmy w stanie zorganizować wszystkie formy finansowania na bardzo korzystnych warunkach.
                    </li>
                    <li className="financing__options">
                        Produkty finansowe dla firm oraz osób prywatnych (leasing operacyjny, leasing finansowy, pożyczka leasingowa czy kredyt).
                    </li>
                    <li className="financing__options">
                        Współpracujemy z największymi bankami oraz firmami leasingowymi, co gwarantuje szeroki wybór oferty oraz kompleksową pomoc.
                    </li>
                </ul>
            </div>
        </div>
    )
}
