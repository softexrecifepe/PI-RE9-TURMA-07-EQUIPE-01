import Link from "next/link";
import "../styles/global.css";

export function Header() {
  return (
    <header>
            <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        
        <div className="text-4xl font-bold text-blue-600" >
          Re9
        </div>

        
        <div className="hidden md:flex space-x-6">
          <Link href="/mainpage" className="text-purple-600 hover:text-purple-800">
            Achar vagas
          </Link>
          <a href="#avaliacoes" className="text-purple-600 hover:text-purple-800">
            Avaliações da empresa
          </a>
          <Link href=" " className="text-purple-600 hover:text-purple-800">
            Sobre nós
        </Link>
          <a href="#suporte" className="text-purple-600 hover:text-purple-800">
            Suporte
          </a>
          <Link href="/" className="text-purple-600 hover:text-purple-800">
            Home
        </Link>
        </div>

        
        <div className="flex items-center space-x-10">
          <a href="#empresas" className="text-purple-600 hover:text-purple-800">
            Empresas
          </a>
          <Link href="/anunciarvaga" className="text-purple-600 hover:text-purple-800"> 
            Anunciar Vaga
          </Link>
          <Link href="/login" className="text-purple-600 hover:text-purple-800">
            Login  
          </Link>
          <Link href="/cadastro">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full">
            Cadastrar CV
          </button>
          </Link>
          <Link href="/cadastroempresa">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full">
            Cadastrar Empresa
          </button>
          </Link>
        </div>
      </div>
    </nav>
        </header>
  );
}