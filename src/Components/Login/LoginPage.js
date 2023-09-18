import React from 'react';
import './LoginPage.css';

function LoginPage() {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form">
        <input type="text" placeholder="Nome de usuário" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default LoginPage;
