import Link from "next/link";
import React, { useState } from "react";

const ApplyPage: React.FC = () => {


  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Cabeçalho */}
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-8">
          <h1 className="text-2xl font-bold">Candidatar-se</h1>
        </div>
      </header>

      {/* Formulário de candidatura */}
      <main className="container mx-auto px-8 py-12">
        <form
          
          className="bg-white shadow-md rounded-lg p-6 space-y-6"
        >
          {/* Nome completo */}
          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold">
              Nome Completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Digite seu nome completo"
             
              className="mt-2 w-full border-gray-300 rounded-lg p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
              required
            />
          </div>

          {/* E-mail */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Digite seu e-mail"
              
              className="mt-2 w-full border-gray-300 rounded-lg p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
              required
            />
          </div>

          {/* Upload de currículo */}
          <div>
            <label htmlFor="resume" className="block text-gray-700 font-semibold">
              Currículo (PDF ou Word)
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              accept=".pdf,.doc,.docx"
             
              className="mt-2 w-full"
              required
            />
          </div>

          {/* Carta de apresentação */}
          <div>
            <label
              htmlFor="coverLetter"
              className="block text-gray-700 font-semibold"
            >
              Carta de Apresentação (opcional)
            </label>
            <textarea
              id="coverLetter"
              name="coverLetter"
              placeholder="Digite sua mensagem..."
              rows={5}
              className="mt-2 w-full border-gray-300 rounded-lg p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
            ></textarea>
          </div>

          {/* Botões */}
          <div className="flex justify-between">
            <Link href="/jobdetalhe">
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
              Enviar Candidatura
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default ApplyPage;
function setShowPopup(arg0: boolean) {
  throw new Error("Function not implemented.");
}

