export default function Buy() {
  return (
    <div id="Buy" className="pt-8 pb-32 font-inter">
      <div
        className="max-w-72 w-10/12 px-2 pb-4 mx-auto bg-gray-200 shadow-buy-form
            sm:max-w-none sm:w-[530px]
            md:w-[680px]
            xl:w-[1100px] xl:pb-0"
      >
        <h3 className="page-title pt-4 pb-2">Formulaire de rachat</h3>
        <p
          className="p-2 pb-5 font-sans
                sm:text-justify"
        >
          Si vous souhaitez vendre votre véhicule, contactez-nous par téléphone
          ou complétez et envoyez le formulaire ci-dessous en indiquant les
          caractéristiques principales du véhicule, une description personnelle
          et des photos d'illustration.
        </p>

        {/* enctype a été défini pour l'envoi d'images */}
        <form
          className="sm:flex sm:flex-wrap"
          action="https://formsubmit.co/alfamotors.kontakt@gmail.com"
          method="POST"
          encType="multipart/form-data"
        >
          <div
            className="sm:w-6/12 sm:pr-1
                    xl:w-4/12 xl:pr-3  xl:h-48"
          >
            <input
              className="buy__area__form__input"
              type="text"
              name="Prénom"
              placeholder="Prénom"
              required
            />
            <input
              className="buy__area__form__input"
              type="text"
              name="Nom"
              placeholder="Nom"
              required
            />
            <input
              className="buy__area__form__input"
              type="text"
              name="Téléphone"
              placeholder="Numéro de téléphone"
            />
            <input
              className="buy__area__form__input"
              type="email"
              name="E-mail"
              placeholder="Adresse e-mail"
              required
            />
            <input
              className="buy__area__form__input"
              type="text"
              name="Prix"
              placeholder="Prix proposé"
            />
          </div>

          <div
            className="sm:w-6/12 sm:pl-1
                    xl:w-4/12 xl:pl-0 xl:pr-3  xl:h-48"
          >
            <input
              className="buy__area__form__input"
              type="text"
              name="Marque et modèle"
              placeholder="Marque et modèle"
              required
            />
            <input
              className="buy__area__form__input"
              type="text"
              name="Année"
              placeholder="Année de production"
              required
            />
            <input
              className="buy__area__form__input"
              type="text"
              name="Motorisation"
              placeholder="Version motorisée"
              required
            />
            <input
              className="buy__area__form__input"
              type="text"
              name="Kilométrage"
              placeholder="Kilométrage"
              required
            />
            <input
              className="buy__area__form__input"
              type="text"
              name="Origine"
              placeholder="Pays d'origine"
              required
            />
          </div>

          <div
            className="w-full
                    xl:w-4/12  xl:h-48"
          >
            <textarea
              className="buy__area__form__input
                        xl:h-[102px]"
              name="Message"
              placeholder="Description personnelle du véhicule/commentaires/remarques"
              required
              rows={4}
            />

            {/* Champs pour les pièces jointes */}
            <div
              className="block mt-4 mx-auto
                        sm:flex sm:w-[520px]
                        xl:relative xl:bottom-px xl:w-full xl:grid xl:grid-cols-2 xl:mt-0"
            >
              <input
                className="buy__area__form__attachment
                            xl:my-px"
                type="file"
                name="Fichier 1"
                accept="image/png, image/jpeg"
              />
              <input
                className="buy__area__form__attachment
                            xl:my-px"
                type="file"
                name="Fichier 2"
                accept="image/png, image/jpeg"
              />
              <input
                className="buy__area__form__attachment
                            xl:my-px"
                type="file"
                name="Fichier 3"
                accept="image/png, image/jpeg"
              />
            </div>

            {/* Bouton remplacé par <input> pour compatibilité Safari */}
            <input
              className="block w-20 mt-4 mx-auto text-lg tracking-wide bg-white border-2 border-black rounded-md border-black rounded-md block mx-autoduration-1000 transition-colors cursor-pointer
                        xl:relative xl:left-[90px] xl:bottom-[49px]
                        hover:bg-black hover:text-white"
              type="submit"
              value="ENVOYER"
            />
          </div>

          <input
            className="buy__area__form__input"
            type="hidden"
            name="_subject"
            value="Offre d'un client"
          ></input>
          <input
            className="buy__area__form__input"
            type="hidden"
            name="_next"
            value="https://alfamotors.pl/thanks"
          ></input>
        </form>
      </div>
    </div>
  );
}
