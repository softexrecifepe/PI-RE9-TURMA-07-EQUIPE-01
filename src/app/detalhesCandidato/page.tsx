import React from 'react';

function DetalhesCandidato({ candidato, onClose }) {

    if (!candidato) {
        return <p>Não há candidato</p>
    }
  return (
    <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '20px', backgroundColor: 'white', border: '1px solid #ccc' }}>
      <h2>{candidato.nome}</h2>
      <p><strong>Área:</strong> {candidato.area}</p>
      <p><strong>Cargo:</strong> {candidato.cargo}</p>
      <p><strong>Experiência:</strong> {candidato.experiencia}</p>
      <p><strong>Endereço:</strong> {candidato.endereco}</p>
      <button onClick={onClose}>Fechar</button>
    </div>
  );
}

export default DetalhesCandidato;
