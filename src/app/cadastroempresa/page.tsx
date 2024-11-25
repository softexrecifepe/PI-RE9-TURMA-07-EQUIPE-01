import Link from "next/link";


const RegisterCompanyPage: React.FC = () => {
 
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Cabeçalho */}
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-8">
          <h1 className="text-2xl font-bold">Cadastro de Empresa</h1>
        </div>
      </header>

      {/* Formulário de Cadastro */}
      <main className="container mx-auto px-8 py-12">
        <form
          
          className="bg-white shadow-md rounded-lg p-6 space-y-6"
        >
          {/* Nome da Empresa */}
          <div>
            <label htmlFor="companyName" className="block text-gray-700 font-semibold">
              Nome da Empresa
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              placeholder="Digite o nome da empresa"
              
              className="mt-2 w-full border-gray-300 rounded-lg p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
              required
            />
          </div>

          {/* Nome do gestor */}
          <div>
            <label htmlFor="companyName" className="block text-gray-700 font-semibold">
              Gestor da Empresa
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              placeholder="Digite o nome do Gestor da Empresa"
              
              className="mt-2 w-full border-gray-300 rounded-lg p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
              required
            />
          </div>

          {/* CNPJ */}
          <div>
            <label htmlFor="cnpj" className="block text-gray-700 font-semibold">
              CNPJ
            </label>
            <input
              type="text"
              id="cnpj"
              name="cnpj"
              placeholder="Digite o CNPJ"
              
              className="mt-2 w-full border-gray-300 rounded-lg p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
              required
            />
          </div>

          {/* E-mail */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold">
              E-mail empresarial
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Digite o e-mail"
              
              className="mt-2 w-full border-gray-300 rounded-lg p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
              required
            />
          </div>

          {/* Telefone */}
          <div>
            <label htmlFor="phone" className="block text-gray-700 font-semibold">
              Telefone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Digite o telefone"
              
              className="mt-2 w-full border-gray-300 rounded-lg p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
              required
            />
          </div>

          {/* Descrição da Empresa */}
          <div>
            <label
              htmlFor="description"
              className="block text-gray-700 font-semibold"
            >
              Descrição da Empresa
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Digite uma breve descrição da empresa"
              
              rows={5}
              className="mt-2 w-full border-gray-300 rounded-lg p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
              required
            ></textarea>
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
              Cadastrar Empresa
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default RegisterCompanyPage;
