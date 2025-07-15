import useFetch from "../hooks/useFetch";
import ImageSlider from "../components/ImageSlider";
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const strapiURL = "https://getthecar.aaaoz.fr";

// Local
// const strapiURL = 'https://getthecar.aaaoz.fr';
// const apiURL = 'https://getthecar.aaaoz.fr/api/cars?populate=*';

interface CarAttributes {
  title: string;
  state: string;
  price?: number;
  year: number;
  mileage: number;
  fuel: string;
  power: number;
  engine_size: string;
  doors: number;
  seats?: number;
  gearbox: string;
  drive: string;
  body: string;
  color: string;
  country: string;
  first_registration: string;
  vin: string;
  gallery: {
    data: {
      attributes: {
        url: string;
      };
    }[];
  };
  description: string;
}

interface Car {
  id: number;
  attributes: CarAttributes;
}

interface StrapiCar {
  0: string;
  1: Car;
}

interface ImageAttributes {
  alternativeText: null;
  caption: null;
  createdAt: string;
  ext: string;
  formats: any;
  hash: string;
  height: number;
  mime: string;
  name: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  size: number;
  updatedAt: string;
  url: string;
  width: number;
}

interface Image {
  attributes: ImageAttributes;
  id: number;
}

export default function CarPage() {
  const { id } = useParams();
  // IDs of cars are not like the order due to deleted records (e.g. first record from db has ID = 12). This why the program uses pagination
  let pagination: number = Number(id) - 20; // TS doesn't accept substracting number from string
  if (pagination < 0) pagination = 0;
  const apiURL =
    "https://getthecar.aaaoz.fr/api/cars?sort=id&pagination[start]=" +
    pagination +
    "&pagination[limit]=100&populate=* ";
  console.debug(apiURL);

  const { loading, error, data } = useFetch(apiURL);
  let imagesURLs: string[] = []; // here will be stored URLs of images
  let idCar: number = Number(id); // turninig string into number

  // A function checking if ID in URL is same as currently checked car from db
  function isThatCar(fetchedCar: Car[]) {
    return fetchedCar[1].id === idCar;
  }

  if (loading) return <Loader />;
  if (error) return <p>Error!!!</p>;

  // let foundCar: StrapiCar | undefined = data.find(isThatCar);
  let foundCar: any = data.find(isThatCar);

  // Collecting an array of car's images
  if (foundCar && foundCar[1]) {
    foundCar[1].attributes.gallery.data.map((image: Image) =>
      imagesURLs.push(strapiURL + image.attributes.formats.large.url),
    );
  } else {
    // if url has ID which is not in db
    return (
      <h3
        style={{
          textAlign: "center",
          fontSize: "22px",
          fontWeight: "700",
          marginTop: 50,
          paddingInline: "5px",
        }}
      >
        Brak samochodu o takim identyfikatorze.
      </h3>
    );
  }

  return (
    <div className="CarPage relative pb-64">
      {" "}
      {/* Position relative nécessaire pour le positionnement absolu du tableau */}
      <h1
        className="py-4 px-2 font-inter text-2xl text-center
            sm:py-6 sm:text-3xl"
      >
        {foundCar[1].attributes.title + " "}
        <div
          className="CarPage__price__area font-medium text-yellow-600 sm:inline-block"
          style={
            foundCar[1].attributes.state === "vendu" ||
            foundCar[1].attributes.state === "soon"
              ? { display: "none" }
              : {}
          }
        >
          <span className="CarPage__price__area__dash px-1">
            {foundCar[1].attributes.price ? "  " : " "}
          </span>
          <span className="CarPage__price__area__number">
            {foundCar[1].attributes.state === "reserve"
              ? " RÉSERVÉ"
              : " " + foundCar[1].attributes.price + " EUR"}
          </span>
        </div>
      </h1>
      {/* Mini slider */}
      <ImageSlider id="ImageSlider" slides={imagesURLs} />
      <table
        className="relative rounded-[5px] top-16 w-90vw max-w-lg mx-auto bg-gray-100 border border-black shadow-car-page-shadow text-[15px] font-medium
            lg:inline-block lg:top-0 lg:left-2 lg:max-w-none lg:w-[360px]
            xl:left-4 p-2
            "
      >
        <tbody className="block width-full">
          <tr className="CarPage__table__body__row border-0">
            {" "}
            {/* La première ligne doit être sans bordure */}
            <td className="CarPage__table__body__row__cell-first">Année :</td>
            <td className="CarPage__table__body__row__cell-second">
              {foundCar[1].attributes.year}
            </td>
          </tr>
          <tr className="CarPage__table__body__row">
            <td className="CarPage__table__body__row__cell-first">
              Kilométrage :
            </td>
            <td className="CarPage__table__body__row__cell-second">
              {foundCar[1].attributes.mileage} km
            </td>
          </tr>
          <tr className="CarPage__table__body__row">
            <td className="CarPage__table__body__row__cell-first">
              Carburant :
            </td>
            <td className="CarPage__table__body__row__cell-second">
              {foundCar[1].attributes.fuel}
            </td>
          </tr>
          <tr className="CarPage__table__body__row">
            <td className="CarPage__table__body__row__cell-first">
              Puissance :
            </td>
            <td className="CarPage__table__body__row__cell-second">
              {foundCar[1].attributes.power} ch
            </td>
          </tr>
          <tr className="CarPage__table__body__row">
            <td className="CarPage__table__body__row__cell-first">
              Cylindrée :
            </td>
            <td className="CarPage__table__body__row__cell-second">
              {foundCar[1].attributes.engine_size}
            </td>
          </tr>
          <tr className="CarPage__table__body__row">
            <td className="CarPage__table__body__row__cell-first">
              Nombre de portes :
            </td>
            <td className="CarPage__table__body__row__cell-second">
              {foundCar[1].attributes.doors}
            </td>
          </tr>
          <tr className="CarPage__table__body__row">
            <td className="CarPage__table__body__row__cell-first">
              Nombre de places :
            </td>
            <td className="CarPage__table__body__row__cell-second">
              {foundCar[1].attributes.seats}
            </td>
          </tr>
          <tr className="CarPage__table__body__row">
            <td className="CarPage__table__body__row__cell-first">
              Boîte de vitesses :
            </td>
            <td className="CarPage__table__body__row__cell-second">
              {foundCar[1].attributes.gearbox}
            </td>
          </tr>
          <tr className="CarPage__table__body__row">
            <td className="CarPage__table__body__row__cell-first">
              Transmission :
            </td>
            <td className="CarPage__table__body__row__cell-second">
              {foundCar[1].attributes.drive}
            </td>
          </tr>
          <tr className="CarPage__table__body__row">
            <td className="CarPage__table__body__row__cell-first">
              Carrosserie :
            </td>
            <td className="CarPage__table__body__row__cell-second">
              {foundCar[1].attributes.body}
            </td>
          </tr>
          <tr className="CarPage__table__body__row">
            <td className="CarPage__table__body__row__cell-first">Couleur :</td>
            <td className="CarPage__table__body__row__cell-second">
              {foundCar[1].attributes.color}
            </td>
          </tr>
          <tr className="CarPage__table__body__row">
            <td className="CarPage__table__body__row__cell-first">
              Pays d'origine :
            </td>
            <td className="CarPage__table__body__row__cell-second">
              {foundCar[1].attributes.country}
            </td>
          </tr>
          <tr className="CarPage__table__body__row">
            <td className="CarPage__table__body__row__cell-first">
              Première immatriculation :
            </td>
            <td className="CarPage__table__body__row__cell-second">
              {foundCar[1].attributes.first_registration}
            </td>
          </tr>
          <tr className="CarPage__table__body__row">
            <td className="CarPage__table__body__row__cell-first">VIN :</td>
            <td className="CarPage__table__body__row__cell-second">
              {foundCar[1].attributes.vin}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="rounded-[5px] CarPage__description relative top-32 w-90vw max-w-[1080px] mx-auto bg-gray-100  text-black">
        <div className="pt-3 pb-7 font-medium text-3xl text-center underline underline-offset-[12px]">
          Description du véhicule
        </div>
        <ReactMarkdown className="px-2">
          {foundCar[1].attributes.description}
        </ReactMarkdown>
      </div>
    </div>
  );
}
