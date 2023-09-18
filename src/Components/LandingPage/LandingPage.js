import React from 'react';
import './LandingPage.css';
import OurServices from '../OurServices/OurServices';

function LandingPage() {

    const handleButtonClick = () => {
        const appLink = 'https://api.whatsapp.com/send?phone=5531971102606&text=Oi%2C+tudo+bem%3F+Estou+com+um+processo%21+Como+pode+me+ajudar%3F&_fb_noscript=1';
        window.location.href = appLink;
    };

  return (
    <div className='landingpage-fullcontent'>
        <div class="landingpage">
            <div class="landingpage-words">
                <h1>Seculus Lawtech</h1>
                <h2>Quer processar alguém? Use a Seculus.</h2>
                <button type="button" class="landingpage-button" onClick={handleButtonClick}>Fale com a gente!</button>
            </div>
            <div class="landingpage-image">
                <img src="./Images/landingBoy.svg" alt="Imagem" />
            </div>
        </div>
        <OurServices />
    </div>
  );
}

export default LandingPage;