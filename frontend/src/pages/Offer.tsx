import Car from '../components/Car';

const strapiURL: string = 'https://kokpit.alfamotors.pl';

interface CarAttributes {
  state: string;
  title: string;
  mileage: number;
  year: number;
  fuel: string;
  power: number;
  gallery: GalleryItem;
}

interface GalleryItem {
  data: {
      attributes: {
          formats: {
              large: {
                  url: string;
              };
              medium: {
                  url: string;
              };
              small: {
                  url: string;
              };
              thumbnail: {
                  url: string;
              };
          };
      };
      id: number;
  }[];
}

interface CarData {
  id: string;
  attributes: CarAttributes;
}

export default function Offer(props: any) {
  const arrayToDisplay = props.arrayToDisplay;

  return (
    <div id="Offer">
      <div className='cards-area'>
        <h1 className='page-title pb-8'>SPRAWDŹ NASZĄ OFERTĘ</h1>
        {arrayToDisplay.map((car: CarData[], index: number) => (
          <Car
            key={'Car no ' + index}
            id={car[1].id}
            state={car[1].attributes.state}
            title={car[1].attributes.title}
            mileage={car[1].attributes.mileage} 
            year={car[1].attributes.year} 
            fuel={car[1].attributes.fuel} 
            power={car[1].attributes.power} 
            imageSource={strapiURL + car[1].attributes.gallery.data[0].attributes.formats.small.url}
          />
        ))}
      </div>
    </div>
  )
}
