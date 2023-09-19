import React from 'react';
import './LoginPage.css';

function LoginPage() {
  return (
    <div className="login-container">
      <img className='login-girlSearching' src="./Images/girl-searching.svg" alt="Imagem" />

      <div className='login-containerWithFields'>
        <h1>Entrar na Seculus Web</h1>
        <h2 class="login-split-title">
          <span class="login-metade-esquerda">Novo usuário?</span>
          <span class="login-metade-direita">Criar uma conta</span>
        </h2>
        <input type="text" class="login-email-textField" placeholder="Email:"></input>
        <input type="password" class="login-password-textField" placeholder="Senha:"></input>
        <div className='login-containerWithButtons'>
          <button className='login-forgotMyPassword'>Esqueci minha senha</button>
          <button className='login-enter'>ENTRAR</button>
        </div>
        
      </div>
    </div>
  );
}

export default LoginPage;
