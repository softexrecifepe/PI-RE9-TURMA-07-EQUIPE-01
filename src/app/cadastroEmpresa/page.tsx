"use client"
import React, { useState } from 'react';

function CompanyForm() {
  const [companyData, setCompanyData] = useState({
    name: '',
    gestor: '',
    gestorArea: '',
    cargo: '',
    endereco: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCompanyData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    // Você pode adicionar uma lógica aqui para salvar os dados da empresa em um banco de dados ou API
    alert(`Empresa cadastrada: ${companyData.name}`);
    // Após o cadastro, você pode redirecionar o usuário para outra página (exemplo: lista de candidatos)
  };

  return (
    <div style={styles.formContainer}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2>Cadastro de Empresa</h2>
        <div style={styles.inputGroup}>
          <label>Nome da Empresa:</label>
          <input
            type="text"
            name="name"
            value={companyData.name}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label>Gestor:</label>
          <input
            type="text"
            name="gestor"
            value={companyData.gestor}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label>Gestor da Área:</label>
          <input
            type="text"
            name="gestorArea"
            value={companyData.gestorArea}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label>Cargo:</label>
          <input
            type="text"
            name="cargo"
            value={companyData.cargo}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label>Endereço:</label>
          <input
            type="text"
            name="endereco"
            value={companyData.endereco}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>Cadastrar Empresa</button>
      </form>
    </div>
  );
}

// Estilos para o formulário
const styles = {
  formContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
  },
  form: {
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: '#fff',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    width: '400px',
  },
  inputGroup: {
    marginBottom: '10px',
  },
  input: {
    width: '100%',
    padding: '8px',
    fontSize: '14px',
    marginTop: '5px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  button: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: '10px 15px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
  }
};

export default CompanyForm;
