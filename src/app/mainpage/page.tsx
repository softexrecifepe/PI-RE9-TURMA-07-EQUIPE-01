import "../styles/global.css";
import Link from "next/link";


export function Principal() {
    return (
        
            
        <>
    
      
      <section id="home" className="bg-purple-500 text-white text-center py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Encontre a vaga perfeita para você</h2>
          <form action="#" method="get" className="flex justify-center mt-6">
            <input type="text" name="search" placeholder="Pesquise vagas..." className="c-black-500 w-3/4 lg:w-1/2 p-2 rounded-l-lg border-none outline-none"/>
            <button type="submit" className="bg-blue-800 hover:bg-purple-800 text-white px-4 py-2 rounded-r-lg">Buscar</button>
          </form>
        </div>
      </section>
    
      
      <section id="vagas" className="py-12">
        <div className="container mx-auto">
          <h2 className="text-center text-2xl font-bold mb-8">Vagas Disponíveis</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-blue-600 mb-2">Desenvolvedor Front-end</h3>
              <p>Empresa: TechCorp</p>
              <p>Local: Remoto</p>
              <Link href="/jobdetalhe"> <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Detalhes</button></Link>
            </div>
            
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-blue-600 mb-2">Suporte ao Cliente</h3>
              <p>Empresa: Cósmica</p>
              <p>Local: Recife, PE</p>
              <Link href="/jobdetalhe"><button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Detalhes</button></Link>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-blue-600 mb-2">Analista de Marketing</h3>
              <p>Empresa: MarketPlus</p>
              <p>Local: São Paulo, SP</p>
              <Link href="/jobdetalhe"><button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Detalhes</button></Link>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-blue-600 mb-2">AUX Administrativo</h3>
              <p>Empresa: SAME</p>
              <p>Local: Recife, PE</p>
              <Link href="/jobdetalhe"><button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Detalhes</button></Link>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-blue-600 mb-2">Recepcionista</h3>
              <p>Empresa: Rede D'Or</p>
              <p>Local: Recife, PE</p>
              <Link href="/jobdetalhe"><button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Detalhes</button></Link>
            </div>

            
            
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-blue-600 mb-2">Vendedor/a Joyería</h3>
              <p>Empresa: TOUS</p>
              <p>Local: Remoto</p>
              <Link href="/jobdetalhe"><button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Detalhes</button></Link>
            </div>
          </div>
        </div>
      </section>
    
      
      </>
     
    );
  }

  export default Principal;