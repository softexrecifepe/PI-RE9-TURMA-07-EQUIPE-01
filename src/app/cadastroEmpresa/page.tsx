"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Importar useRouter do Next.js
import './cadastroEmpresa.css';

export default function FormularioCadastroEmpresa() {
  const [gestor, setGestor] = useState('');
  const [gestorRh, setGestorRh] = useState('');
  const [gestorContratacao, setGestorContratacao] = useState('');

  const router = useRouter(); // Inicializar o useRouter

  // Função para lidar com o envio do formulário
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Evita o comportamento padrão de recarregar a página

    // Lógica para validar os campos ou enviar os dados
    if (!gestor || !gestorRh || !gestorContratacao) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Navegar para a página de sucesso após o envio (se necessário)
    router.push('/sucesso'); // Navegação programática para a página de sucesso

    // Limpar os campos após o envio (se necessário)
    setGestor('');
    setGestorRh('');
    setGestorContratacao('');
  };

  return (
    <section className="form-container">
      <div>
        <h2 className="form-title">Cadastre sua empresa</h2>
        
        <form id="form" onSubmit={handleSubmit}>
          
          <label>
            Gestor:
            <input 
              type="text" 
              id="gestor" 
              value={gestor}
              onChange={(e) => setGestor(e.target.value)} 
              required 
            />
          </label>
          
          <label>
            Gestor de RH:
            <input 
              type="text" 
              id="gestor-rh" 
              value={gestorRh}
              onChange={(e) => setGestorRh(e.target.value)} 
              required 
            />
          </label>

          <label>
            Gestor de contratação:
            <input 
              type="text" 
              id="gestor-contratacao" 
              value={gestorContratacao}
              onChange={(e) => setGestorContratacao(e.target.value)} 
              required 
            />
          </label>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
};
