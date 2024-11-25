

const CVRegistrationPage: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      <header className="bg-blue-600 text-white py-8">
        <div className="container mx-auto text-center px-8">
          <h1 className="text-3xl font-bold">Cadastro de Currículo - Re9</h1>
        </div>
      </header>

      <section className="py-20">
        <div className="container mx-auto text-center px-8">
          <h2 className="text-3xl font-bold mb-8">Preencha suas Informações</h2>
          <form
            
            className="bg-white p-8 shadow-lg rounded-lg max-w-xl mx-auto"
          >
            <div className="mb-4">
              <label className="block text-left font-semibold" htmlFor="fullName">
                Nome Completo
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
               
                placeholder="Seu nome completo"
                className="w-full p-4 border border-gray-300 rounded-lg mt-2"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-left font-semibold" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                
                placeholder="Seu email"
                className="w-full p-4 border border-gray-300 rounded-lg mt-2"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-left font-semibold" htmlFor="phone">
                Telefone
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                
                placeholder="Seu telefone"
                className="w-full p-4 border border-gray-300 rounded-lg mt-2"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-left font-semibold" htmlFor="jobTitle">
                Cargo desejado
              </label>
              <input
                type="text"
                id="jobTitle"
                name="jobTitle"
               
                placeholder="Ex: Desenvolvedor Front-End"
                className="w-full p-4 border border-gray-300 rounded-lg mt-2"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-left font-semibold" htmlFor="experience">
                Experiência Profissional
              </label>
              <textarea
                id="experience"
                name="experience"
               
                placeholder="Descreva sua experiência profissional"
                className="w-full p-4 border border-gray-300 rounded-lg mt-2"
                rows={4}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-left font-semibold" htmlFor="skills">
                Habilidades
              </label>
              <textarea
                id="skills"
                name="skills"
               
                placeholder="Liste suas habilidades, separadas por vírgulas"
                className="w-full p-4 border border-gray-300 rounded-lg mt-2"
                rows={4}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-left font-semibold" htmlFor="cvFile">
                Faça o Upload do Seu CV (PDF, DOCX)
              </label>
              <input
                type="file"
                id="cvFile"
                name="cvFile"
                accept=".pdf,.docx"
               
                className="w-full p-4 border border-gray-300 rounded-lg mt-2"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-500 transition duration-300"
            >
              Enviar Currículo
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center px-8">
          <p>© 2024 Re9 - Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  );
};

export default CVRegistrationPage;
