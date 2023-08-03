import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { IoLogoWhatsapp, IoMdMail } from 'react-icons/io';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={leftContentStyle}>
        <img
          src="seculus-logo-cortado.png" // Substitua pelo caminho da sua logo
          alt="Logo da sua empresa"
          style={logoStyle}
        />
      </div>
      <div style={rightContentStyle}>
        <a href="https://www.linkedin.com/company/seculus-lawtech/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} color="white" style={iconStyle} />
        </a>
        <a href="https://api.whatsapp.com/send?phone=5531971102606&text=Oi%2C+tudo+bem%3F+Estou+com+um+processo%21+Como+pode+me+ajudar%3F&_fb_noscript=1" target="_blank" rel="noopener noreferrer">
          <IoLogoWhatsapp size={30} color="white" style={iconStyle} />
        </a>
        <a href="seculus.law@gmail.com">
          <IoMdMail size={30} color="white" style={iconStyle} />
        </a>
      </div>
    </footer>
  );
};

// Estilos para o footer e os conteúdos esquerdo e direito
const footerStyle = {
  backgroundColor: 'rgb(89, 97, 92)',
  padding: '10px',
  display: 'flex',
  justifyContent: 'space-between',
};

const leftContentStyle = {
  display: 'flex',
  flexDirection: 'column', // Renderiza os elementos em coluna
  alignItems: 'flex-start', // Alinha os elementos à esquerda
};

const logoStyle = {
  width: '40px', // Defina o tamanho adequado para a sua logo
  marginRight: '10px', // Espaçamento entre a logo e o texto
  marginLeft: '100px', // Distância da logo em relação à borda esquerda
  marginTop: '10px',
  marginBottom: '10px',
};

const rightContentStyle = {
  flex: 1,
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  marginRight: '100px',
};

const iconStyle = {
  marginRight: '20px', // Espaçamento entre os ícones
};

export default Footer;
