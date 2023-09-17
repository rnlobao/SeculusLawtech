import React from 'react';
import './OurServices.css';

function OurServices() {
    return (
        <div class="section">
          <h2>Nossos serviços</h2>
          <div class="boxes">
              <div class="box">
                  <img src="Images/filesBoy.svg" alt="Imagem 1" />
                  <h3>Otimizamos pagamentos de guias</h3>
                  <p>Facilitando a gestão financeira do seu escritório com soluções inteligentes de pagamento.</p>
              </div>
              <div class="box">
                  <img src="Images/clockGirl.svg" alt="Imagem 2" />
                  <h3>Economizamos o seu tempo</h3>
                  <p>Potencializando a eficiência com soluções que poupam o tempo precioso dos seus associados.</p>
              </div>
              <div class="box">
                  <img src="Images/boyChart.svg" alt="Imagem 3" />
                  <h3>Aumentamos sua margem de lucro</h3>
                  <p>Maximizando seus resultados financeiros com estratégias que impulsionam a sua margem de lucro.</p>
              </div>
          </div>
        </div>
    )
}

export default OurServices;