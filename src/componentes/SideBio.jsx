import React from 'react'
import {Link} from 'react-router-dom'
import perfil from '../imagens/perfil3.jpeg'
import instagram from '../imagens/instagram.png'
import whats from '../imagens/whatsapp.png'
import twitter from '../imagens/twitter.png'
import linkedin from '../imagens/linkedin.png'
import facebook from '../imagens/facebook.png'
import './SideBio.css'
 

export default ()=>{    
    return(
        <div className="SideBio">
                
                <div className="Foto">
                    <Link id="perfil"  to="/">
                    <img src={perfil} alt=""/>
                    </Link>
                    
                </div>
                <div className="Info">
                    <h2>Guilherme Lima</h2>
                    <p>Desenvolvedor Frond-end</p>
                </div>
                
            <div className="Navegacao">
            <nav>
                <ul>
                    
                    <li className="first">
                        <Link id="home"  to="/">
                            INÍCIO
                        </Link>
                    </li>
                    
                    <li>
                        <Link id="sobre"  to="/Sobre">
                            SOBRE
                        </Link>
                    </li>
                    
                    <li>
                        <Link id="projetos"  to="/Projetos">
                            PROJETOS
                        </Link>
                    </li>
                    
                    <li>
                        <Link id="contato"  to="/Contato">
                            CONTATO
                        </Link>
                    </li>
                    
                </ul>
                <div className="redesSociais">
                    <span className="icones">
                        <a href="https://www.instagram.com/guilherme.limamota/?hl=pt-br" target="_blank"><img src={instagram} alt=""/></a> 
                    </span>
                    <span className="icones">
                        <a href="https://web.whatsapp.com/send?phone=5564981247960" target="_blank"><img src={whats} alt=""/></a> 
                    </span>
                    <span className="icones">
                        <a href=""><img src={twitter} alt=""/></a> 
                    </span>
                    <span className="icones">
                        <a href="https://www.linkedin.com/in/guilherme-lima-mota-8941231a8/" target="_blank"><img src={linkedin} alt=""/></a> 
                    </span>
                    <span className="icones">
                        <a href="https://www.facebook.com/guilherme.limamota/" target="_blank"><img src={facebook} alt=""/></a> 
                    </span>
                </div>
            </nav>
            </div>
 
             
        </div>
    )
}