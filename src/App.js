import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'; // Importe Routes em vez de Switch
import { isMobile } from 'react-device-detect';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import LandingPage from './Components/LandingPage/LandingPage';
import LoginPage from './Components/Login/LoginPage';

function App() {

  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (      
      <div className="App">
        {!isLoginPage && <Header />}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* <Route path="/cadastro" element={<RegisterPage />} /> */}
        </Routes>
        {!isLoginPage && <Footer />}
      </div>
  );
}

export default App;
