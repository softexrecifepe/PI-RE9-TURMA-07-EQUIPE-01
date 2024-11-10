"use client";
import React, { useRef } from 'react';
import { useRouter } from 'next/router'; // Importar useRouter do Next.js
import '../styles/cadastroEmpresa.css';

export default function FormularioCadastroEmpresa() {
  const classeAtivaRef = useRef(false);
  const gestorRef = useRef('');
  const gestorRhRef = useRef('');
  const gestorContratacaoRef = useRef('');

  const router = useRouter(); // Inicializar o useRouter

  // Função para lidar com o envio do formulário
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Evita o comportamento padrão de recarregar a página

    // Lógica para validar os campos ou enviar os dados
    if (!gestorRef.current || !gestorRhRef.current || !gestorContratacaoRef.current) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Navegar para a página de sucesso após o envio (se necessário)
    router.push('/sucesso'); // Navegação programática para a página de sucesso

    // Limpar os campos após o envio (se necessário)
    gestorRef.current = '';
    gestorRhRef.current = '';
    gestorContratacaoRef.current = '';
  };

  // Função para alternar a classe ativa
  const handleFocus = () => {
    classeAtivaRef.current = true;
  };
  const handleBlur = () => {
    classeAtivaRef.current = false;
  };

  return (
    <section className="form-container">
      <div>
        <h2 className="form-title">Cadastre sua empresa</h2>
        
        <form id="form" className={classeAtivaRef.current ? 'ativo' : ''} onSubmit={handleSubmit}>
          
          <label>
            Gestor:
            <input 
              type="text" 
              id="gestor" 
              defaultValue={gestorRef.current}
              onChange={(e) => gestorRef.current = e.target.value} 
              required 
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          
          <label>
            Gestor de RH:
            <input 
              type="text" 
              id="gestor-rh" 
              defaultValue={gestorRhRef.current}
              onChange={(e) => gestorRhRef.current = e.target.value} 
              required 
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label>
            Gestor de contratação:
            <input 
              type="text" 
              id="gestor-contratacao" 
              defaultValue={gestorContratacaoRef.current}
              onChange={(e) => gestorContratacaoRef.current = e.target.value} 
              required 
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
};
