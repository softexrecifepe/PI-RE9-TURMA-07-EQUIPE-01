export default function Header() {
    return (
        <header>
            <nav >
                <div>
                    <ul className="nav-itens">
                        <div className="logo">Re9</div>
                        <li><a href="#">ACHAR VAGAS</a></li>
                        <li><a href="#">AVALIAÇÕES DE EMPRESAS</a></li>
                        <li><a href="#">SOBRE NÓS</a></li>
                        <li><a href="#">SUPORTE</a></li>
                    </ul>
                </div>
                <div className="btn">
                   <ul className="actions-itens">
                    <li><a href="#">Empresas</a></li>
                    <li><a>|</a></li>
                    <li><a href="#">Anunciar Vaga</a></li>
                    <li><a>|</a></li>
                    <li><a href="#">Login</a></li>
                    <li><a>|</a></li>
                    <button  className="cadastro">Cadastrar CV</button>
                   </ul>
                </div>
            </nav>
        </header>
    );
}
