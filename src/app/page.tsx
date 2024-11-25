import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">

      {/* Cabeçalho */}
      

      {/* Seção de Introdução */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-700 text-white py-24" id="intro">
        <div className="container mx-auto text-center px-8">
          <h2 className="text-4xl font-bold mb-4">Encontre as Melhores Oportunidades de Emprego</h2>
          <p className="text-xl mb-8">A Re9 conecta você com empresas que buscam profissionais qualificados como você. Cadastre-se e comece a sua jornada!</p>
          <a
            href="#register"
            className="bg-yellow-500 text-black py-2 px-6 rounded-lg hover:bg-yellow-400 transition duration-300"
          >
            Cadastre-se Agora
          </a>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20" id="how-it-works">
        <div className="container mx-auto text-center px-8">
          <h2 className="text-3xl font-bold mb-8">Como Funciona?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-4">1. Crie Seu Perfil</h3>
              <p>Preencha as informações sobre suas habilidades, experiência e preferências para que possamos encontrar as melhores vagas para você.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-4">2. Encontre Vagas</h3>
              <p>Busque por vagas de emprego alinhadas com o seu perfil. Filtros de pesquisa vão ajudar você a encontrar as melhores opções.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-4">3. Candidate-se!</h3>
              <p>Envie sua candidatura diretamente para as empresas e aguarde a resposta. Oportunidades estão esperando por você!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Por Que Escolher Re9? */}
      <section className="bg-gray-100 py-20" id="why-us">
        <div className="container mx-auto text-center px-8">
          <h2 className="text-3xl font-bold mb-8">Por Que Escolher Re9?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Conexão Direta</h3>
              <p>Conectamos você diretamente com as empresas, sem intermediários. Mais agilidade na sua busca por emprego.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Oportunidades Personalizadas</h3>
              <p>As vagas que você verá são adaptadas ao seu perfil e preferências, otimizando o seu tempo.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Plataforma Segura</h3>
              <p>A Re9 valoriza sua privacidade e oferece uma plataforma segura para envio de candidaturas e informações.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Chamada para Cadastro */}
      <section className="bg-blue-600 text-white py-24" id="register">
        <div className="container mx-auto text-center px-8">
          <h2 className="text-3xl font-bold mb-4">Pronto para Encontrar Seu Emprego?</h2>
          <p className="text-xl mb-8">Cadastre-se na Re9 e comece a explorar vagas que se encaixam no seu perfil. Seu futuro começa aqui!</p>
          <a
            href="#register-form"
            className="bg-yellow-500 text-black py-2 px-6 rounded-lg hover:bg-yellow-400 transition duration-300"
          >
            Cadastre-se Agora
          </a>
        </div>
      </section>

      {/* Formulário de Cadastro */}
      <section className="py-20" id="register-form">
        <div className="container mx-auto text-center px-8">
          <h2 className="text-3xl font-bold mb-8">Cadastre-se</h2>
          <form className="bg-white p-8 shadow-lg rounded-lg">
            <input
              type="text"
              placeholder="Nome Completo"
              className="w-full mb-4 p-4 border border-gray-300 rounded-lg"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full mb-4 p-4 border border-gray-300 rounded-lg"
            />
            <input
              type="password"
              placeholder="Senha"
              className="w-full mb-4 p-4 border border-gray-300 rounded-lg"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-500 transition duration-300"
            >
              Criar Conta
            </button>
          </form>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center px-8">
          <p>© 2024 Re9 - Todos os direitos reservados</p>
        </div>
      </footer>

    </div>
  );
};

export default LandingPage;
