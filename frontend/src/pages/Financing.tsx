import React from 'react';
import coins from '../assets/coins.webp';

export default function Financing() {
    return (
        <div id='Financing' className="w-[800px] mx-auto pb-12 lg:w-[90vw] lg:pb-20">
            <h1 className="font-bebasFont text-3xl font-medium text-center underline decoration-2 underline-offset-8 mb-0 lg:mb-0">
                FINANSOWANIE
            </h1>
            <div className="flex flex-row lg:flex-col-reverse lg:items-center lg:box-border lg:w-full lg:p-5">
                <img src={coins} alt='Samochody używane na leasing' className="w-4/5 lg:w-[400px]"/>
                <ul className="w-9/10 lg:w-[400px]">
                    <li className="my-5 lg:w-full">
                        Jesteśmy w stanie zorganizować wszystkie formy finansowania na bardzo korzystnych warunkach.
                    </li>
                    <li className="my-5 lg:w-full">
                        Produkty finansowe dla firm oraz osób prywatnych (leasing operacyjny, leasing finansowy, pożyczka leasingowa czy kredyt).
                    </li>
                    <li className="my-5 lg:w-full">
                        Współpracujemy z największymi bankami oraz firmami leasingowymi, co gwarantuje szeroki wybór oferty oraz kompleksową pomoc.
                    </li>
                </ul>
            </div>
        </div>
    )
}
