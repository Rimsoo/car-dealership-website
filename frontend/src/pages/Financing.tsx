import coins from '../assets/coins.webp';

export default function Financing() {
    return (
        <div id='Financing' className="w-[90vw] mx-auto pb-[80px] 
        lg:w-[800px] lg:pb-12">
            <h1 className="mt-6 mb-0 font-bebasFont text-3xl font-medium text-center underline decoration-2 underline-offset-8 
            lg:my-6">
                FINANSOWANIE
            </h1>
            <div className="box-border w-full items-center p-5 pt-0 flex flex-col-reverse 
            lg:flex-row">
                <img src={coins} alt='Pomoc w uzyskaniu leasingu na samochód' className="w-4/5 lg:w-[400px]"/>
                <ul className="w-4/5 list-disc pl-8 lg:w-[400px]">
                    <li className="my-5 w-full">
                        Jesteśmy w stanie zorganizować wszystkie formy finansowania na bardzo korzystnych warunkach.
                    </li>
                    <li className="my-5 w-full">
                        Produkty finansowe dla firm oraz osób prywatnych (leasing operacyjny, leasing finansowy, pożyczka leasingowa czy kredyt).
                    </li>
                    <li className="my-5 w-full">
                        Współpracujemy z największymi bankami oraz firmami leasingowymi, co gwarantuje szeroki wybór oferty oraz kompleksową pomoc.
                    </li>
                </ul>
            </div>
        </div>
    )
}
