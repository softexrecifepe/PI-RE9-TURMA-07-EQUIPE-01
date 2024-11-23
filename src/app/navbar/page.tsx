import Link from "next/link";
import "./navBar.css"

export function Header() {
  return (
    <header>
            <nav>
                <div>
                    <ul className="nav-itens">
                        <div className="logo">Re9</div>
                        <li><a href="#">ACHAR VAGAS</a></li>
                        <li><a href="#">AVALIAÇÕES DE EMPRESAS</a></li>
                        <li><a href="#">SOBRE NÓS</a></li>
                        <li><a href="#">SUPORTE</a></li>
                        <li><Link href="/">HOME</Link></li>
                    </ul>
                </div>
                <div className="btn">
                   <ul className="actions-itens">
                    <li><a href="#">Empresas</a></li>
                    <li><a>|</a></li>
                    <li><a href="#">Anunciar Vaga</a></li>
                    <li><a>|</a></li>
                    <li><Link href="/login">Login</Link></li>
                    <li><Link href="/cadastro"><button  className="cadastro">Cadastrar CV</button></Link></li>
                    <li><Link href="/cadastroEmpresa"><button className="cadastro">Cadastrar Empresa</button></Link></li>
                   </ul>
                </div>
            </nav>
        </header>
  );
}