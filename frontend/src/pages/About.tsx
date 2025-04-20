export default function About() {
  return (
    <div
      id="About"
      className="mx-auto w-[90vw] pb-[80px]
        lg:w-[1000px] lg:pb-[50px]"
    >
      <h1 className="page-title pt-5">À propos</h1>
      <div className="mb-5">
        <h2 className="about__subtitle">Histoire</h2>
        <p>
          <span className="font-bold">GetTHEcar</span> est une entreprise
          familiale spécialisée dans la vente de voitures de luxe de marques
          premium, avec une tradition remontant à près de trente ans.
        </p>
        <p>
          Née d'une passion pour l'automobile, où l'expérience et la
          connaissance des voitures se sont transmises de génération en
          génération.
        </p>
      </div>

      <div className="mb-[20px]">
        <h2 className="about__subtitle">Objectif</h2>
        <p>
          Notre principe fondamental est une approche individuelle, sincère et
          honnête envers chaque client, afin qu'il puisse choisir en toute
          conscience la voiture qui lui convient le mieux.
        </p>
        <p>
          La majorité de nos clients, après une première transaction réussie,
          reviennent vers nous pour un nouvel achat en toute confiance et
          recommandent nos services.
        </p>
      </div>

      <div className="mb-[20px]">
        <h2 className="about__subtitle">Fondement de notre activité</h2>
        <p>
          Toutes les voitures sont notre propriété. La décision d'achat est
          toujours précédée d'une vérification approfondie du véhicule et du
          respect de critères de sélection stricts.
        </p>
        <p className="font-bold">
          Nous n'achetons que des exemplaires dont l'historique d'utilisation et
          d'entretien est entièrement documenté, qui n'ont jamais été accidentés
          et qui bénéficient souvent d'une garantie constructeur.
        </p>
        <p className="font-bold">
          Uniquement des voitures d'origine nationale, achetées auprès de
          concessionnaires agréés en Pologne.
        </p>
      </div>

      <div className="mb-[20px]">
        <h2 className="about__subtitle">
          Changer de voiture - une approche globale
        </h2>
        <p>
          Nous abordons de manière globale la question du changement de voiture
          pour nos clients potentiels :
        </p>
        <ul className="list-disc pl-[25px] m-[3px]">
          <li>
            Nous vous conseillons dans le choix de la marque et du modèle qui
            répondront à vos attentes
          </li>
          <li>
            Nous recherchons des véhicules sur mesure selon vos exigences
            spécifiques
          </li>
          <li>
            Si vous possédez un véhicule en très bon état, nous pouvons vous le
            racheter ou l'échanger contre une voiture de notre offre
          </li>
          <li>
            Nous organisons des financements très avantageux pour les
            entreprises comme pour les particuliers.
          </li>
        </ul>
      </div>

      <h3 className="font-inter text-center text-3xl font-medium pt-2 pb-7 mx-auto my-0">
        Contactez-nous via le formulaire, par e-mail ou par téléphone !
      </h3>
    </div>
  );
}

