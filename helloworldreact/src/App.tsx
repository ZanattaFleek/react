import React from 'react';
import './App.css';

import CadastroCliente from './componentes/CadastroCliente'

function App() {

  const empresa: string = "Fleek Cursos"
  const site: string = "https://www.fleekcursos.com.br"

  const rsCliente = {
    nome: 'Zanatta',
    endereco: 'Av. 21 de Abril 504'
  }

  return (
    <div className="App">
      <h1>{empresa}</h1>
      <p>{10}</p>
      <p>{rsCliente.nome}</p>
      <p>{10 + 10}</p>
      <a href={site}>Site Fleek</a>
      <CadastroCliente />
      <CadastroCliente />
      <CadastroCliente />
    </div>
  );
}

export default App;
