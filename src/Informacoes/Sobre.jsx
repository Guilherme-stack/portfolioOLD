import React,{useEffect} from 'react'
import './Sobre.css'
export default ()=>{
    useEffect(() => {
        window.scrollTo(0, 0);
        document.getElementById("contato").style.color = "#959ea9"
        document.getElementById("projetos").style.color = "#959ea9"
        document.getElementById("sobre").style.color = "#10bcf9"
        document.getElementById("home").style.color ="#959ea9"
     }, [])
    return(
        <div className="Sobre">
            <div className="tituloSobre">
                <h1>Sobre Mim</h1>
                <hr/>
                <h3>Um resumo sobre mim e como cheguei nessa área.</h3>
            </div>
            <div className="resumo">
                <p>Olá, meu nome é <strong>Guilherme Lima</strong>, (apelidado de <strong>Ninja</strong> quando jogava bola) desenvolvedor front-end
                 nascido no Pará, mas por conta do trabalho do meu pai minha familia deixou o estado pra morar em vários outros lugares 
                 pelos anos seguintes. Sou estudante de <strong>Sistemas de Informação</strong> na <strong>Universidade Federal de Goiás</strong> (
                 aliás, onde moro atualmente, em Goiânia). Comecei a "codar" depois de entrar na Universidade, pois peguei uma matéria de programação
                 e tive que dá meus pulos para poder aprender e passar. Desde então, após me interessar mais do que nunca por essa área, comecei a estudar
                <strong>Javascript</strong>, <strong>HTML</strong> e <strong>CSS</strong> (a trinca do desenvolvimento web) e não parei mais (minto, dei uma pausa porque a faculdade tava puxada). 
                Enfim, tenho 19 anos e desde dos 18 estudando e aprendendo para ser um profissional bastante qualificado na área.</p>
                <p>Gosto muito de esportes, sempre jogando vôlei e futebol. 👌🏼</p>

                 <p>Nas horas vagas jogo dama com meu pai, dou uma corrida ali na pista, escuto música (música é vida) ou assisto algum documentário ou série. 🌚🎥💿</p>
                 <p className="direitos">© TODOS OS DIREITOS RESERVADOS <strong>CONSTRUÍDO COM REACT JS.</strong></p>
            </div>
        </div>
    )
}