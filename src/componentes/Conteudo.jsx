import React from 'react'
import {Switch, Route, Router}  from 'react-router-dom'
import Inicio from '../Informacoes/Inicio'
import Sobre from '../Informacoes/Sobre'
import Projetos from '../Informacoes/Projetos'
import Contato from '../Informacoes/Contato'
import './Conteudo.css'

export default ()=>{
         
    return(
        <div className="Conteudo">
            
            <Switch>
                <Route path="//">
                    <Inicio></Inicio>
                </Route>
                
                <Route path="/Sobre">
                    <Sobre></Sobre>
                </Route>
                <Route path="/Projetos">
                    <Projetos></Projetos>
                </Route>
                <Route path="/Contato">
                     <Contato></Contato>
                </Route>
            </Switch>
        </div>
    )
}