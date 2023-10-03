import React, { useState } from 'react';
import validator from 'validator';
import './RegisterPage.css';
import InputMask from 'react-input-mask';

function RegisterPage() {

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [senha, setSenha] = useState('');
  const [erroSenha, setErroSenha] = useState('');

  const [cnpj, setCNPJ] = useState('');
  const [erroCNPJ, setErroCNPJ] = useState('');

  const [cep, setCEP] = useState('');
  const [erroCEP, setErroCEP] = useState('');

  const [telefone, setTelefone] = useState('');
  const [erroTelefone, setErroTelefone] = useState('');

  const handleCNPJChange = (event) => {
    const newCNPJ = event.target.value;
    setCNPJ(newCNPJ);
    let contadorDeInts = 0;

    for (let i = 0; i < newCNPJ.length; i++) {
      if (/[0-9]/.test(newCNPJ[i])) {
        contadorDeInts++;
      }
    }

    if (contadorDeInts !== 14) {
      setErroCNPJ('CNPJ Inválido');
    } else {
      setErroCNPJ('');
    }
  };

  const handleCEPChange = (event) => {
    const newCEP = event.target.value;
    setCEP(newCEP);
    let contadorDeInts = 0;

    for (let i = 0; i < newCEP.length; i++) {
      if (/[0-9]/.test(newCEP[i])) {
        contadorDeInts++;
      }
    }

    if (contadorDeInts !== 14) {
      setErroCEP('CEP Inválido');
    } else {
      setErroCEP('');
    }
  };

  const handleTelefoneChange = (event) => {
    const newTelefone = event.target.value;
    setTelefone(newTelefone);
    let contadorDeInts = 0;

    for (let i = 0; i < newTelefone.length; i++) {
      if (/[0-9]/.test(newTelefone[i])) {
        contadorDeInts++;
      }
    }

    if (contadorDeInts !== 11) {
      setErroTelefone('Telefone Inválido');
    } else {
      setErroTelefone('');
    }
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    if (!validator.isEmail(newEmail)) {
      setEmailError('Email Inválido');
    } else {
      setEmailError('');
    }
  };

  const handleSenhaChange = (event) => {
    const novaSenha = event.target.value;
    setSenha(novaSenha);

    const opcoes = {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    };

    const hasLowercase = /[a-z]/.test(novaSenha);
    const hasUppercase = /[A-Z]/.test(novaSenha);
    const hasNumbers = /[0-9]/.test(novaSenha);
    const hasSymbols = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(novaSenha);

    const resultadoValidacao = validator.isStrongPassword(novaSenha, opcoes);
    console.log(novaSenha);
    if (resultadoValidacao === true) {
      setErroSenha('');
    }
    else if (!hasLowercase) {
      setErroSenha('A senha deve conter pelo menos 1 letra minúscula.');
    } 
    else if (!hasUppercase) {
      setErroSenha('A senha deve conter pelo menos 1 letra maiúscula.');
    }
    else if (!hasNumbers) {
      setErroSenha('A senha deve conter pelo menos 1 número.');
    }
    else if (!hasSymbols) {
      setErroSenha('A senha deve conter pelo menos 1 caractere especial.');
      console.log('Nao tem simbolo');
    }
    else if (!(novaSenha.length >= opcoes.minLength)) {
      setErroSenha('A senha deve conter pelo menos 8 caracteres.');
      console.log('Nao tem 8 chars');
    }
  };

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

        <input type="text" class="register-email-textField" placeholder="Email:" value={email} onChange={handleEmailChange}></input>
        <h1 className='register-email-erro'>{emailError}</h1>

        <input type="text" class="register-password-textField" placeholder="Senha:" value={senha} onChange={handleSenhaChange}></input>
        <h1 className='register-password-erro'>{erroSenha}</h1>

        <InputMask mask="99.999.999/9999-99" placeholder="00.000.000/0000-00" value={cnpj} onChange={handleCNPJChange}>
          {(inputProps) => <input type="text" class="register-cnpj-textField" placeholder="CNPJ do escritório:"/>}
        </InputMask>
        <h1 className='register-cnpj-erro'>{erroCNPJ}</h1>
      
        <InputMask mask="(99)99999-9999" placeholder="(00)00000-0000" value={telefone} onChange={handleTelefoneChange}>
          {(inputProps) => <input type="text" class="register-telefone-textField" placeholder="Telefone:"/>}
        </InputMask>
        <h1 className='register-telefone-erro'>{erroTelefone}</h1>

        <div className='register-camposDeEndereco1'>
            <input type="text" class="register-password-textField" placeholder="Logradouro:"></input>
            <input type="text" class="register-password-textField" placeholder="Número:"></input>
        </div>
        <div className='register-camposDeEndereco2'>
            <input type="text" class="register-password-textField" placeholder="Bairro:"></input>
            <InputMask mask="99999-999" placeholder="00000-000" value={cep} onChange={handleCEPChange}>
              {(inputProps) => <input type="text" class="register-password-textField" placeholder="CEP:"/>}
            </InputMask>
        </div>
        <h1 className='register-cep-erro'>{erroCEP}</h1>

        <button className='button-register-enter'>CRIAR CONTA</button>
        
      </div>
    </div>
  );
}

export default RegisterPage;
