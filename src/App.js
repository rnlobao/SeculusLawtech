import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import Emissao from './Emissao';
import Footer from './Footer';

import './App.css';

function App() {

  const handleButtonClick = () => {
    // Substitua 'seu_link_do_app' pelo link real do aplicativo que você deseja abrir.
    // Exemplo: 'https://api.whatsapp.com/' para o WhatsApp.
    const appLink = 'https://api.whatsapp.com/send?phone=5531971102606&text=Oi%2C+tudo+b\
    em%3F+Estou+com+um+processo%21+Como+pode+me+ajudar%3F&_fb_noscript=1';
    window.location.href = appLink;
  };

  return (
    // <BrowserRouter>
      <div className="App">
        <header>
          <div className="logo">
            <img src="seculus-logo-cortado.png" alt="Logo" />
          </div>
          <nav>
            <ul>
              <li><a href="#">Home</a></li>
            </ul>
          </nav>
        </header>

        <div class="landing-page">
          <div class="content">
              <h1>Seculus Lawtech</h1>
              <h2>Quer processar alguém? Use a Seculus.</h2>
              <button type="button" class="landingpage-button" onClick={handleButtonClick}>Fale com a gente!</button>
          </div>
          <div class="image">
              <img src="landingBoy.svg" alt="Imagem" />
          </div>
        </div>

        <div class="section">
          <h2>Nossos serviços</h2>
          <div class="boxes">
              <div class="box">
                  <img src="filesBoy.svg" alt="Imagem 1" />
                  <h3>Otimizamos pagamentos de guias</h3>
                  <p>Facilitando a gestão financeira do seu escritório com soluções inteligentes de pagamento.</p>
              </div>
              <div class="box">
                  <img src="clockGirl.svg" alt="Imagem 2" />
                  <h3>Economizamos o seu tempo</h3>
                  <p>Potencializando a eficiência com soluções que poupam o tempo precioso dos seus associados.</p>
              </div>
              <div class="box">
                  <img src="boyChart.svg" alt="Imagem 3" />
                  <h3>Aumentamos sua margem de lucro</h3>
                  <p>Maximizando seus resultados financeiros com estratégias que impulsionam a sua margem de lucro.</p>
              </div>
          </div>
        </div>
        <Footer />
      </div>
    // </BrowserRouter>
  );
}

export default App;
