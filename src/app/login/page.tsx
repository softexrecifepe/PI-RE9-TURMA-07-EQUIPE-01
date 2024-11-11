"use client";

import React, { useState } from 'react';
import './loginpage.css';


interface Login {}

const CandidateLogin: React.FC<Login> = () => {
  const [username, setUsername] = useState(' ');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ username, email, cpf, password });
  };

  return (
    <div className="Lcontainer">
      <h2 className="Ltitle">Login do Candidato</h2>
      <form onSubmit={handleLogin} className="Lform">
        <label>
          Nome de Usuário:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="Linput"
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="Linput"
          />
        </label>
        <label>
          CPF:
          <input
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
            className="Linput"
          />
        </label>
        <label>
          Senha:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="Linput"
          />
        </label>
        <button type="submit" className="Lbutton">
          Entrar
        </button>
      </form>
    </div>
  );
};

export default CandidateLogin;
