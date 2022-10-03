import React from 'react';
import './App.css';

import CadastroCliente from './componentes/CadastroCliente'

function App() {

  const empresa: string = "Fleek Cursos"

  const UF: Array<string> = ['SP', 'MG', 'SC']

  return (
    <div className="App">
      <h1>{empresa}</h1>

      {/* 

      {UF.map((uf, index) => <p key={index}>{uf}</p>)}
      
*/}
      {UF.map((uf, index) => {

        return <p key={index}>{uf}</p>

      })}

    </div>
  );
}

export default App;
