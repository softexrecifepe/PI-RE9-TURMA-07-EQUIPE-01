import Link from "next/link";
import React from "react";

const JobDetails: React.FC = () => {
  return (

    <div className="bg-gray-100 min-h-screen">
      
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-8">
          <h1 className="text-2xl font-bold">Detalhes da Vaga</h1>
        </div>
      </header>

      
      <main className="container mx-auto px-8 py-12">
       
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-3xl font-bold text-blue-600">Desenvolvedor Front-end</h2>
          <p className="mt-2 text-gray-700">
            <strong>Empresa:</strong> TechCorp
          </p>
          <p className="text-gray-700">
            <strong>Local:</strong> Remoto
          </p>
          <p className="text-gray-700">
            <strong>Salário:</strong> R$ 5.000 - R$ 7.000
          </p>
        </div>

        
        <section className="mt-8">
          <h3 className="text-2xl font-semibold text-blue-600">Descrição da Vaga</h3>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Estamos buscando um Desenvolvedor Front-end talentoso para se juntar ao nosso time
            de tecnologia. O profissional será responsável por criar interfaces dinâmicas e
            responsivas, trabalhando com tecnologias modernas como React, Tailwind CSS e TypeScript.
          </p>
        </section>

        
        <section className="mt-8">
          <h3 className="text-2xl font-semibold text-blue-600">Requisitos</h3>
          <ul className="list-disc ml-6 mt-4 text-gray-700 space-y-2">
            <li>Experiência com React e TypeScript.</li>
            <li>Conhecimento em Tailwind CSS e boas práticas de design responsivo.</li>
            <li>Habilidade para trabalhar em equipe.</li>
            <li>Inglês intermediário ou avançado.</li>
          </ul>
        </section>

        
        <section className="mt-8">
          <h3 className="text-2xl font-semibold text-blue-600">Benefícios</h3>
          <ul className="list-disc ml-6 mt-4 text-gray-700 space-y-2">
            <li>Horário flexível.</li>
            <li>Plano de saúde e odontológico.</li>
            <li>Auxílio home office.</li>
            <li>Bônus de desempenho.</li>
          </ul>
        </section>

       
        <div className="mt-12 flex justify-between">

            <Link href="/mainpage">
          <button className="bg-gray-600 text-white px-6 py-2 rounded-full hover:bg-gray-700">
            Voltar
          </button> </Link>

          <Link href="/candidatura">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
            Candidatar-se
          </button> </Link>
        </div>
      </main>
    </div>
  );
};

export default JobDetails;
