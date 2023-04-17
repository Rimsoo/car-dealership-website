import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// page and layout imports
import About from "./pages/About";
import Buy from "./pages/Buy";
import CarPage from "./pages/CarPage";
import Contact from "./pages/Contact";
import Financing from "./pages/Financing";
import Offer from "./pages/Offer";
import Sold from "./pages/Sold";
import SiteHeader from "./components/SiteHeader";
import Wallpaper from "./components/Wallpaper";

function App() {
  return (
    <Router>
      {/* <ApolloProvider client={client}>         */}
        <div className="App">
          <SiteHeader />
          <Wallpaper />
          <Routes>
            {/* There must be 'exact' below due to fact every other route suits to '/' route */}
            <Route path='/About' element={<About />} /> 
            <Route path='/Buy' element={<Buy />} /> 
            <Route path='/CarPage' element={<CarPage />} /> 
            <Route path='/Contact' element={<Contact />} /> 
            <Route path='/Financing' element={<Financing />} /> 
            <Route exact path='/' element={<Offer />} /> 
            <Route path='/Sold' element={<Sold />} /> 
          </Routes>
        </div>
      {/* </ApolloProvider> */}
    </Router>
  );
}

export default App;
