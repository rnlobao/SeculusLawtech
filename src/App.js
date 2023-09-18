import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importe Routes em vez de Switch
import { isMobile } from 'react-device-detect';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import LandingPage from './Components/LandingPage/LandingPage';
import LoginPage from './Components/Login/LoginPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
