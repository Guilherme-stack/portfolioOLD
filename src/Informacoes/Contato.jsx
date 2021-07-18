import React,{useEffect} from 'react'
import './Contato.css'
export default ()=>{
    useEffect(() => {
        window.scrollTo(0, 0);
        document.getElementById("contato").style.color = "#10bcf9"
        document.getElementById("projetos").style.color = "#959ea9"
        document.getElementById("sobre").style.color = "#959ea9"
        document.getElementById("home").style.color ="#959ea9"
     }, [])
    return(
        <div className="Contato">
            <div className="tituloContato">
                <h1>Contato</h1>
                <hr/>
                <p>Para entrar em contato é só preencher o formulário abaixo.</p>
            </div>
            <form className="Formulario" method="POST" action="https://api.staticforms.xyz/submit">
                <input type="hidden" name="accessKey" value="365681d4-e9ad-4db5-a4ba-0966b1b40610"/>
                <input type="hidden" name="redirectTo" value="http://localhost:3000/Contato"></input>
                <div className="nome">
                    <label htmlFor="name">Nome</label><br/>
                    <input type="text" id="name" name="name" placeholder="Seu nome"/>
                </div>
                <div className="email">
                    <label htmlFor="email">Email</label><br/>
                    <input type="text" id="email" name="email" placeholder="Seu indereço de email"/>
                </div>
                <div className="assunto">
                    <label htmlFor="subject">Assunto</label><br/>
                    <select name="subject" id="subject">
                        <option value="vazio">Selecione</option>
                        <option value="estagio">Estágio</option>
                        <option value="emprego">Emprego</option>
                        <option value="freela">Freelancer</option>
                        <option value="outroAssunto">Outros assuntos</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="message">Mensagem</label><br/>
                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Sua mensagem"></textarea>
                </div>
                <div>
                    <button type="submit">Enviar Mensagem</button>
                </div>
                <p className="direitos">© TODOS OS DIREITOS RESERVADOS <strong>CONSTRUÍDO COM REACT JS.</strong></p>
            </form>
        </div>
    )
}