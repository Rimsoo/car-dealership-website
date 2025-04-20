import phoneIcon from "../assets/contact/phoneIcon.png";
import emailIcon from "../assets/contact/email.png";

export default function Contact() {
  return (
    <div
      id="Contact"
      className="flex flex-col-reverse w-full pb-16 font-inter
        lg:flex-row lg:mx-auto lg:max-w-5xl"
    >
      <span
        className="w-11/12 mx-auto text-lg
            sm:w-[36rem]
            lg:w-6/12 lg:mr-5
            xl:mr-10"
      >
        <h3 className="contact__container__title">Formulaire de contact</h3>

        <form
          className="text-lg"
          action="https://formsubmit.co/alfamotors.kontakt@gmail.com"
          method="POST"
        >
          <input
            className="contact__container__form__input contact__container__form__input-contour"
            type="text"
            name="Prénom"
            placeholder="Prénom"
            required
          />
          <input
            className="contact__container__form__input contact__container__form__input-contour"
            type="text"
            name="Nom"
            placeholder="Nom"
            required
          />
          <input
            className="contact__container__form__input contact__container__form__input-contour"
            type="text"
            name="Numéro de téléphone"
            placeholder="Numéro de téléphone"
          />
          <input
            className="contact__container__form__input contact__container__form__input-contour"
            type="email"
            name="Adresse e-mail"
            placeholder="Adresse e-mail"
            required
          />

          {/* Zone de texte */}
          <textarea
            className="contact__container__form__input contact__container__form__input-contour h-48"
            name="Message"
            placeholder="Message"
            required
            rows={4}
          />

          {/* Bouton (input pour compatibilité Safari) */}
          <input
            className="contact__container__form__input
                    contact__container__form__input-contour-contour
                    border-2 my-1 mx-auto pt-0.5  tracking-wide border-black rounded-md block border-black rounded-md block mx-autoduration-1000 transition-colors cursor-pointer
                    hover:bg-black hover:text-white"
            id="contact-area__button"
            type="submit"
            value="ENVOYER"
          />

          <input
            className="contact__container__form__input contact__container__form__input-contour"
            type="hidden"
            name="_subject"
            value="Un client a envoyé une demande"
          ></input>
          <input
            className="contact__container__form__input contact__container__form__input-contour"
            type="hidden"
            name="_next"
            value="https://alfamotors.pl/thanks"
          ></input>
        </form>
      </span>

      <span
        className="w-11/12 mx-auto text-lg
            sm:w-[36rem]
            lg:w-5/12 lg:ml-0"
      >
        <h3 className="contact__container__title">Informations de contact</h3>

        <div className="flex text-center">
          <img
            className="relative top-1 h-4 pr-2"
            src={phoneIcon}
            alt="Phone icon"
          />
          <span>Téléphone : +33 33 33 33 33</span>
        </div>
        <div className="flex text-center">
          <img
            className="relative top-1 h-4 pr-2"
            src={emailIcon}
            alt="Mail icon"
          />
          <span>E-mail : contact@get-the-car.com</span>
        </div>

        {/* Carte */}
        <iframe
          className="block my-2 mx-auto h-72 w-full border border-black rounded-md
                lg:h-64"
          title="Carte"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41926.509678250746!2d2.4506030599733717!3d48.94573836389545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e613637e3baf4d%3A0xdab0d8387e2a4a50!2s93600%20Aulnay-sous-Bois%2C%20France!5e0!3m2!1sfr!2sbe!4v1745163855636!5m2!1sfr!2sbe"
        ></iframe>
      </span>
    </div>
  );
}
