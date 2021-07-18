import  React  from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Conteudo from './componentes/Conteudo';
import SideBio from './componentes/SideBio';
function App() {
  return (
    <div className="App">
      <Router>
          <div>
          <SideBio></SideBio>
          </div>
          <div>
          <Conteudo></Conteudo>
          </div>
                 
      </Router>
    </div>
  );
}

export default App;
