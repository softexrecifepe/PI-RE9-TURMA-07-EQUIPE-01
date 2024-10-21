
export default function Header() {
    return (
    <body>
        <header>
            <nav >
                <div className="logo">Re9</div>
                <div>
                    <ul className="nav-itens">
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Registre-se</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Suporte</a></li>
                    </ul>
                </div>
                <div className="btn">
                    <button className="login">Login</button>
                    <button  className="cadastro">Cadastro</button>
                </div>
            </nav>
        </header>

        <main>
            <aside>
                <h2 className="txt1"><span>Inscreva-se agora</span></h2>
                <h2 className="txt2">na Re9</h2>
                <p className="txt3">Estamos em todo o Brasil, com oportunidades para diversas áreas. Além disso, não importa se é seu primeiro emprego ou se você já tem uma carreira sólida. Divulgamos vagas de trabalho para todos os níveis.</p>
                <form>
                    <input type="text" placeholder="Nome"></input>
                    <input type="email" placeholder="E-mail"></input>
                    <input type="submit" value="Enviar >"></input>
                </form>
            </aside>

            <article>
                <img src="https://github.com/alexandresaints/landing-page-tutorial/blob/main/components/images/77d0a7c454e658833800528e748edbe9.png?raw=true" alt="Mulher" />     
            </article>

        </main>
    </body>
    )
}
