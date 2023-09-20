import React from 'react';
import './RegisterPage.css';

function RegisterPage() {
  return (
    <div className="register-container">
      <img className='register-girlSearching' src="./Images/register-boy.svg" alt="Imagem" />

      <div className='register-containerWithFields'>
        <h1>Criar uma conta</h1>
        <h2 class="register-split-title">
          <span class="register-metade-esquerda">Já é usuário?</span>
          <span class="register-metade-direita">Faça login</span>
        </h2>
        <input type="text" class="register-nome-textField" placeholder="Nome:"></input>
        <input type="password" class="register-email-textField" placeholder="Email:"></input>
        <input type="text" class="register-password-textField" placeholder="Senha:"></input>
        <input type="text" class="register-cnpj-textField" placeholder="CNPJ do escritório:"></input>
        <input type="text" class="register-telefone-textField" placeholder="Telefone:"></input>

        <div className='register-camposDeEndereco1'>
            <input type="text" class="register-password-textField" placeholder="Logradouro:"></input>
            <input type="text" class="register-password-textField" placeholder="Número:"></input>
        </div>
        <div className='register-camposDeEndereco2'>
            <input type="text" class="register-password-textField" placeholder="Bairro:"></input>
            <input type="text" class="register-password-textField" placeholder="Cep:"></input>
        </div>
        <div className='register-camposDeEndereco3'>
            <input type="text" class="register-password-textField" placeholder="Cidade:"></input>
            <input type="text" class="register-password-textField" placeholder="UF:"></input>
        </div>

        <button className='register-enter'>CRIAR CONTA</button>
        
      </div>
    </div>
  );
}

export default RegisterPage;
