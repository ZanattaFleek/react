import React from 'react';
import './App.css';

import CadastroCliente from './componentes/CadastroCliente'

function App() {

  const empresa: string = "Fleek Cursos"

  return (
    <div className="App">
      <h1>{empresa}</h1>
      <CadastroCliente />

    </div>
  );
}

export default App;
