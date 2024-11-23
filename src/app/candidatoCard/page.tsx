import React, { useState } from 'react';
import DetalhesCandidato from '../detalhesCandidato/page';

function CandidatoCard({ candidato }) {;
    const [showPopup, setShowPopup] = useState(false);
    
if (!candidato) {
    return <p>Candidato não encontrado!</p>;
  }

  return (
    <div onClick={() => setShowPopup(true)} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
      <h3>{candidato.nome}</h3>
      <p>{candidato.area} - {candidato.cargo}</p>
      <p>Experiência: {candidato.experiencia}</p>
      <p>Endereço: {candidato.endereco}</p>
      
      {showPopup && <DetalhesCandidato candidato={candidato} onClose={() => setShowPopup(false)} />}
    </div>
  );
}

export default CandidatoCard;
