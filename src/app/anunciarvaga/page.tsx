import Link from "next/link";
import React, { useState } from "react";

const PostJobPage: React.FC = () => {
 
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Cabeçalho */}
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-8">
          <h1 className="text-2xl font-bold">Anunciar Vaga</h1>
        </div>
      </header>

      {/* Formulário de Anúncio de Vaga */}
      <main className="container mx-auto px-8 py-12">
        <form
          
          className="bg-white shadow-md rounded-lg p-6 space-y-6"
        >
          {/* Título da Vaga */}
          <div>
            <label htmlFor="jobTitle" className="block text-gray-700 font-semibold">
              Título da Vaga
            </label>
            <input
              type="text"
              id="jobTitle"
              name="jobTitle"
              placeholder="Digite o título da vaga (ex: Desenvolvedor Front-end)"
              
              className="mt-2 w-full border-gray-300 rounded-lg p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
              required
            />
          </div>

          {/* Descrição da Vaga */}
          <div>
            <label htmlFor="jobDescription" className="block text-gray-700 font-semibold">
              Descrição da Vaga
            </label>
            <textarea
              id="jobDescription"
              name="jobDescription"
              placeholder="Descreva os detalhes da vaga, requisitos e benefícios"
             
              rows={5}
              className="mt-2 w-full border-gray-300 rounded-lg p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
              required
            ></textarea>
          </div>

          {/* Localização */}
          <div>
            <label htmlFor="location" className="block text-gray-700 font-semibold">
              Localização
            </label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Digite a localização (ex: São Paulo, SP)"
              
              className="mt-2 w-full border-gray-300 rounded-lg p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
              required
            />
          </div>

          {/* Salário */}
          <div>
            <label htmlFor="salary" className="block text-gray-700 font-semibold">
              Salário (Opcional)
            </label>
            <input
              type="text"
              id="salary"
              name="salary"
              placeholder="Digite o salário (ex: R$ 5.000,00)"
              
              className="mt-2 w-full border-gray-300 rounded-lg p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
          </div>

          {/* Tipo de Contrato */}
          <div>
            <label htmlFor="jobType" className="block text-gray-700 font-semibold">
              Tipo de Contrato
            </label>
            <select
              id="jobType"
              name="jobType"
              
              className="mt-2 w-full border-gray-300 rounded-lg p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
            >
              <option value="full-time">Tempo Integral</option>
              <option value="part-time">Meio Período</option>
              <option value="contract">Contrato</option>
              <option value="internship">Estágio</option>
              <option value="freelance">Freelancer</option>
            </select>
          </div>

          {/* Botões */}
          <div className="flex justify-between">
            <Link href="/">
            <button
              type="button"
              
              className="bg-gray-600 text-white px-6 py-2 rounded-full hover:bg-gray-700"
            >
              Voltar
            </button>
            </Link>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
            >
              Anunciar Vaga
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default PostJobPage;
