# **Re9 - Plataforma de Vagas de Emprego**

O **Re9** é uma plataforma moderna e intuitiva que conecta profissionais a oportunidades de emprego, permitindo que candidatos se cadastrem facilmente, enviem seus currículos e se candidatem para vagas. Empresas também podem anunciar suas vagas para atrair candidatos qualificados.

---

## **Tabela de Conteúdos**

- [Descrição do Projeto](#descrição-do-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Estrutura de Pastas](#estrutura-de-pastas)


---

## **Descrição do Projeto**

O Re9 é um site de vagas de emprego que visa conectar profissionais e empresas de forma simples e eficaz. Com a Re9, você pode:

- **Candidatar-se a Vagas**: Criar um perfil, adicionar suas habilidades e experiências, e candidatar-se a vagas relevantes.
- **Anunciar Vagas**: Empresas podem criar uma conta e divulgar vagas de emprego, atraindo candidatos qualificados.
- **Cadastro de Currículo**: Os candidatos podem cadastrar seus currículos diretamente na plataforma, tornando o processo de candidatura mais eficiente.

O projeto foi desenvolvido com **React**, **TypeScript** e **Tailwind CSS** para garantir uma experiência de usuário fluida e responsiva.

---

## **Tecnologias Utilizadas**

- **React**: Biblioteca JavaScript para construir interfaces de usuário.
- **TypeScript**: Superconjunto do JavaScript para garantir um código mais robusto e tipado.
- **Tailwind CSS**: Framework CSS utilitário para estilização rápida e responsiva.
- **Next**: Ferramenta de build moderna para desenvolvimento rápido e eficiente.

---

## **Instalação**

Para rodar o projeto localmente, siga os passos abaixo:


### **Pré-requisitos**

- **Node.js**: Certifique-se de ter o Node.js instalado. Você pode verificar a versão instalada com o comando:

  ```PowerShell
  node -v

- **Clone do Projeto**: faça um clone do projeto com o comando:

  ```PowerShell
  git clone https://github.com/softexrecifepe/PI-RE9-TURMA-07-EQUIPE-01.git

- **Instalação das dependencias**: instale as dependencias do projeto com o comando:

  ```PowerShell
  npm i

- **Inicialização do Projeto com o Next**: Inicie o projeto no seu navegador com o comando:

  ```PowerShell
  npm run dev

### **Estrutura de Pastas**

```axapta
PI-RE9
│
├── public/                    # Arquivos públicos (ícones, imagens, etc)
│
├── src/app                    # Código-fonte do projeto
│   ├── anunciarvaga           # Página para empresas anunciar vagas
│   ├──cadastro                # Página para o usuário de cadastrar
│   ├──cadastroEmpresa         # Página para as empresas se cadastrarem
│   ├──candidatura             # Página de candidatura á vaga
│   ├──jobdetalhe              # Página de detalhes da vaga
│   ├──mainpage                # Página principal com as vagas disponiveis
│   ├──navbar                  # Navbar
│   └── App.tsx                # Arquivo da página inicial e padrão
│
├── package.json               # Dependências e scripts do NPM
└── README.md                  # Documentação do projeto

