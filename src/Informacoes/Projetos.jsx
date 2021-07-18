import React,{useEffect} from 'react'
import './Projetos.css'
import SacoDeRedacao from '../imagens/sacoderedacao.png'
import CalcularImc from '../imagens/calcularimc.png'
import academy from '../imagens/gymAcademy.png'
import MediaPonderada from '../imagens/calcularmediaponderada.png'
import Eventos from "../imagens/eventos.png";
import codeSite from "../imagens/codesite.png";
export default ()=>{
     useEffect(() => {
        window.scrollTo(0, 0);
        document.getElementById("contato").style.color = "#959ea9"
        document.getElementById("projetos").style.color = "#10bcf9"
        document.getElementById("sobre").style.color = "#959ea9"
        document.getElementById("home").style.color ="#959ea9"
     }, [])
    return(
        <div className="Projetos">
            <div className="TituloProjetos">
                <h1>Projetos desenvolvidos</h1>
                <h3>sites, calculadoras & aplicações</h3>
                <hr/>
            </div>
            <div className="gymAcademy">
                <h3><strong>Site Code.</strong></h3>
                <img src={codeSite} alt=""/>
                <p>Site de empresa fictícia desenvolvida em <strong>React JS</strong> <a href="https://codesitecompany.netlify.app/ " target="_blank">Visitar</a> </p>
            </div>
            <div className="gymAcademy">
                <h3><strong>Publicação de Eventos</strong></h3>
                <img src={Eventos} alt=""/>
                <p>Aplicação desenvolvida em <strong>React</strong>, <strong>Redux</strong> e <strong>Bootstrap</strong> no front-end e <strong>Firebase</strong> no back-end. Site com <strong>layout responsivo</strong> para publicação de eventos com as funções de cadastro, login, publicação, edição e remoção de eventos. <a href="https://publicacaodeeventos.netlify.app/ " target="_blank">Visitar</a> </p>
            </div>
            <div className="gymAcademy">
                <h3><strong>Academy Studio</strong></h3>
                <img src={academy} alt=""/>
                <p>Landing page com layout <strong>responsivo</strong> desenvolvido com <strong>React JS</strong>. <a href="https://academygym.netlify.app/ " target="_blank">Visitar</a> </p>
            </div>
            <div className="sacoDeRedacao" >
                <h3><strong>Saco de redações</strong></h3>
                <img src={SacoDeRedacao} alt=""/>
                <p>
                    Site ainda em desenvolvimento com <strong>HTML</strong>, <strong>CSS</strong> e <strong>Javascript</strong> puro e com layout responsivo. Aplicação desenvolvida
                    a fim de ajudar estudantes de vestibulares, pois terá redações com pontuações variáveis
                    corrigidas por algumas plataformas de correção de redação. Nesse sentido, estudantes
                    teriam um norte sobre o que fazer ou o que não fazer na hora de dissertar uma redação, pois
                    o site terá várias, com temas e pontuações distinstas. <a href="http://guilhermelimamota.epizy.com/" target="_blank">Visitar</a>
                </p>
            </div>
            <div className="CalcularImc" >
                <h3><strong>Calculadora de índice de massa corporal</strong></h3>
                <img src={CalcularImc} alt=""/>
                <p>
                    Aplicação desenvolvida com <strong>HTML</strong>, <strong>CSS</strong> e <strong>Javascript</strong> puro.
                    Faço caminhada, tento ser adepto de uma vida não sedentária, nesse sentido fiquei sabendo sobre o <strong>Índice de massa corporal</strong>,
                    que basicamente é uma forma de calcular se seu peso está de acordo com sua altura. <a target="_blank" href="http://calcularmassacorporal.epizy.com/">Visitar</a>
                </p>
            </div>
            <div className="MediaPonderada" >
                <h3><strong>Calculadora de média ponderada</strong></h3>
                <img src={MediaPonderada} alt=""/>
                <p>
                    Aplicação desenvolvida com <strong>HTML</strong>, <strong>CSS</strong> e <strong>Javascript</strong> puro.
                    Se não fosse o <strong>Exame Nacional do Ensino Médio</strong> (ENEM) não estaria na área atualmente. Nesse sentido,
                    decidi desenvolver uma aplicação que me ajudava a calcular uma possível nota que eu teria no <strong>Sistema de Seleção Unicicada</strong> (SISU), 
                    pois a minha faculdade lida com pesos na nota. <a target="_blank" href="http://calcularmediaenem.epizy.com/">Visitar</a>
                </p>
            </div>
            <div>
                    <p className="direitos">© TODOS OS DIREITOS RESERVADOS <strong>CONSTRUÍDO COM REACT JS.</strong></p>
            </div>
        </div>
    )
}