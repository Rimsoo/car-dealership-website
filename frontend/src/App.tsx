import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { HashRouter } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'; // For fetching with graphql

// page and layout imports
import About from "./pages/About";
import Buy from "./pages/Buy";
import CarPage from "./pages/CarPage";
import Contact from "./pages/Contact";
import Financing from "./pages/Financing";
import Footer from "./components/Footer";
import Offer from "./pages/Offer";
import Sold from "./pages/Sold";
import ScrollPagesTop from "./hooks/scrollPagesTop";
import SiteHeader from "./components/SiteHeader";
import Thanks from "./pages/Thanks";
import Wallpaper from "./components/Wallpaper";

// hooks
import useFetch from './hooks/useFetch';
import mergeSort from './hooks/mergeSort';

// Styling
import './tailwind.css';

// Graphql
const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
});


// The code lines below get more than 25 records given by a default, the Strapi's limit is 100 (can't be increased)
const apiURL1: string = 'https://kokpit.alfamotors.pl/api/cars?sort=date&pagination[pageSize]=100&populate=*';
const apiURL2: string = 'https://kokpit.alfamotors.pl/api/cars?sort=date&pagination[start]=100&pagination[limit]=100&populate=*'; 

// TypeScript
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

function App() {
  const fetchedObject1 = useFetch(apiURL1);
  const fetchedObject2 = useFetch(apiURL2);
  
  if (fetchedObject1.loading || fetchedObject2.loading) return;
  if (fetchedObject1.error || fetchedObject2.error) return;
  
  // Merging both arrays
  const combinedData = [...fetchedObject1.data, ...fetchedObject2.data];
  
  // Using merge sort for setting cars in the order basing on "owners_number" attribute. It's treated as "kolejność" atttribute in the user's panel
  const sortedCars = mergeSort(combinedData);

  // Extracting offered cars
  const filteredCarsOffered = sortedCars.filter((car: CarData[]) => car[1].attributes.state !== 'sold');
  
  // Extracting sold cars 
  const filteredCarsSold = sortedCars.filter((car: CarData[]) => car[1].attributes.state === 'sold');
  
  // Splitting Sold cars into smaller arrays each containing up to 48 elements
  function splitIntoChunks(array: []) {
    const result= []
    for (let i = 0; i < array.length; i += 48) {
      const chunk = array.slice(i, i + 48);
      result.push(chunk);
    }
    return result;
  }
  const arrayOfArraysWithSoldCars = splitIntoChunks(filteredCarsSold);

  const trueArray = Array.from(arrayOfArraysWithSoldCars[0]);

  return (
    <Router>
      <ApolloProvider client={client}>
        <div className="App min-h-screen relative">
          <ScrollPagesTop />
          <SiteHeader />
          <Wallpaper />
          <Routes>
            <Route path='/about' element={<About />} /> 
            <Route path='/buy' element={<Buy />} /> 
            <Route path='/carpage/:id' element={<CarPage />} /> 
            <Route path='/contact' element={<Contact />} /> 
            <Route path='/financing' element={<Financing />} /> 
            <Route path='/' element={<Offer />} />

            <Route path={`/sold`} element={<Sold arrayToDisplay={trueArray} />} />

            <Route path='/thanks' element={<Thanks />} /> 
          </Routes>
          <Footer />
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;