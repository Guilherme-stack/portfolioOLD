import React,{useEffect} from 'react'
import './Inicio.css'

export default ()=>{
    useEffect(() => {
        window.scrollTo(0, 0);
        document.getElementById("contato").style.color = "#959ea9"
        document.getElementById("projetos").style.color = "#959ea9"
        document.getElementById("sobre").style.color = "#959ea9"
        document.getElementById("home").style.color = "#10bcf9"
     }, [])
    return(
        
        <div className="Inicio">
            <div className="titulo">
                <h1>Guilherme Lima</h1>
                <h3>Desenvolvedor Front-end</h3>
            </div>
            <div className="about">
                <h3>Sobre</h3>
                <hr/>
                <p>
                    Desenvolvedor Front-end, iniciando na área de desenvolvimento e estudando muito <strong>React JS</strong>.
                    Intusiasta das novas tecnologias do mercado, aprendiz de tuturias do youtube, sonhando em criar
                    o novo <strong>Uber</strong>, <strong>Tinder</strong>, <strong>Facebook</strong>, <strong>Instagram</strong> em um futuro bem distante. Em busca de 
                    um "trampo" na área, mas, enquanto não encontro, crio projetos independente a fim de colocar em prática os estudos. Enfim, você está no meu portfólio
                    (desenvolvido por mim mesmo) e aqui verá meus projetos e um pouco sobre mim.
                </p>
                <p className="direitos">© TODOS OS DIREITOS RESERVADOS <strong>CONSTRUÍDO COM REACT JS.</strong></p>
            </div>
        </div>
    )
}