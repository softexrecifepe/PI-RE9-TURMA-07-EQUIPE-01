import React from 'react';
import './stylescadastro.css';

const CadastroPage: React.FC = () => {
    return (
        <div className="card">
            <header className="header">
                <nav className="nav">
                    <ul className="nav-list">
                        <li className="nav-item">Início</li>
                        <li className="nav-item">Login</li>
                        <li className="nav-item">Cadastro</li>
                        <li className="nav-item">Sobre Nós</li>
                        <li className="nav-item">Suporte</li>
                    </ul>
                </nav>
            </header>
            <main className="content">
                <h2 className="title">Crie sua conta</h2>
                <form>
                    <fieldset className="fieldset">
                        <legend>Informações Pessoais:</legend>
                        <div className="input-group">
                            <label htmlFor="fullName">Nome completo:</label>
                            <input type="text" id="fullName" name="fullName" placeholder="Digite seu nome completo" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="address">Endereço:</label>
                            <input type="text" id="address" name="address" placeholder="Digite seu endereço" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="phone">Número de telefone:</label>
                            <input type="tel" id="phone" name="phone" placeholder="Digite seu telefone" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="email">E-mail:</label>
                            <input type="email" id="email" name="email" placeholder="Digite seu email" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="birthDate">Data de nascimento:</label>
                            <input type="date" id="birthDate" name="birthDate" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="objective">Objetivo Profissional (opcional):</label>
                            <textarea id="objective" name="objective" placeholder="Descreva seu objetivo" rows={3}></textarea>
                        </div>
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend>Experiência Profissional:</legend>
                        <div className="input-group">
                            <label htmlFor="companyName">Nome da empresa:</label>
                            <input type="text" id="companyName" name="companyName" placeholder="Nome da empresa" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="position">Cargo ocupado:</label>
                            <input type="text" id="position" name="position" placeholder="Cargo ocupado" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="employmentPeriod">Período de atuação:</label>
                            <input type="text" id="employmentPeriod" name="employmentPeriod" placeholder="Ex: Jan 2020 - Dez 2021" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="responsibilities">Descrição das responsabilidades:</label>
                            <textarea id="responsibilities" name="responsibilities" placeholder="Descreva suas responsabilidades" rows={3}></textarea>
                        </div>
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend>Educação:</legend>
                        <div className="input-group">
                            <label htmlFor="institution">Nome da instituição de ensino:</label>
                            <input type="text" id="institution" name="institution" placeholder="Instituição de ensino" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="degree">Grau ou diploma obtido:</label>
                            <input type="text" id="degree" name="degree" placeholder="Grau ou diploma" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="studyPeriod">Período de estudo:</label>
                            <input type="text" id="studyPeriod" name="studyPeriod" placeholder="Ex: Jan 2018 - Dez 2022" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="specializations">Principais disciplinas ou especializações (opcional):</label>
                            <textarea id="specializations" name="specializations" placeholder="Disciplinas ou especializações" rows={3}></textarea>
                        </div>
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend>Habilidades:</legend>
                        <div className="input-group">
                            <label htmlFor="skills">Descreva suas habilidades:</label>
                            <textarea id="skills" name="skills" placeholder="Descreva suas habilidades" rows={3}></textarea>
                        </div>
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend>Certificações e Cursos:</legend>
                        <div className="input-group">
                            <label htmlFor="courseName">Nome do curso ou certificação:</label>
                            <input type="text" id="courseName" name="courseName" placeholder="Nome do curso" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="institutionCert">Instituição:</label>
                            <input type="text" id="institutionCert" name="institutionCert" placeholder="Instituição" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="completionDate">Data de conclusão:</label>
                            <input type="date" id="completionDate" name="completionDate" required />
                        </div>
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend>Referências:</legend>
                        <div className="input-group">
                            <label htmlFor="references">Nome e contato de referências:</label>
                            <textarea id="references" name="references" placeholder="Nome e contato" rows={3}></textarea>
                        </div>
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend>Disponibilidade:</legend>
                        <div className="input-group">
                            <label htmlFor="availability">Dias e horários disponíveis:</label>
                            <textarea id="availability" name="availability" placeholder="Ex: Segunda a Sexta, 9h - 17h" rows={3}></textarea>
                        </div>
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend>Motivação:</legend>
                        <div className="input-group">
                            <label htmlFor="motivation">Por que deseja trabalhar na empresa ou na posição?</label>
                            <textarea id="motivation" name="motivation" placeholder="Descreva sua motivação" rows={3}></textarea>
                        </div>
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend>Anexos:</legend>
                        <div className="input-group">
                            <label htmlFor="attachments">Envie seu currículo ou carta de apresentação:</label>
                            <input type="file" id="attachments" name="attachments" required />
                        </div>
                    </fieldset>
                    <button type="submit" className="button">Cadastrar</button>
                </form>
            </main>
            <footer className="footer">
                <p> 2024 site. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
};

export default CadastroPage;
