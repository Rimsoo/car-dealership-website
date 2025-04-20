import coins from "../assets/financing/coins.webp";

export default function Financing() {
  return (
    <div
      id="Financing"
      className="w-[90vw] mx-auto pb-[80px] 
        lg:w-[800px] lg:pb-12"
    >
      <h1 className="page-title py-5">FINANCEMENT</h1>
      <div
        className="box-border w-full items-center p-5 pt-0 flex flex-col-reverse 
            lg:flex-row"
      >
        <img
          src={coins}
          alt="Aide pour obtenir un leasing automobile"
          className="w-4/5 lg:w-[400px]"
        />
        <ul className="w-4/5 list-disc pl-8 lg:w-[400px]">
          <li className="financing__options">
            Nous pouvons organiser toutes les formes de financement à des
            conditions très avantageuses.
          </li>
          <li className="financing__options">
            Produits financiers pour les entreprises et les particuliers
            (leasing opérationnel, leasing financier, prêt leasing ou crédit).
          </li>
          <li className="financing__options">
            Nous collaborons avec les plus grandes banques et sociétés de
            leasing, ce qui garantit un large choix d'offres et une assistance
            complète.
          </li>
        </ul>
      </div>
    </div>
  );
}
