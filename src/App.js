import React from 'react';
import './App.css';

import { isMobile } from 'react-device-detect';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import LandingPage from './Components/LandingPage/LandingPage';
import OurServices from './Components/OurServices/OurServices';

function App() {

  

  return (
      <div className="App">
      <Header />
      <LandingPage />
      <OurServices />
      <Footer />
      </div>
  );
}

export default App;
