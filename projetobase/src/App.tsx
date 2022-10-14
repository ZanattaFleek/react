import React from 'react';
import './App.css';
import Auth from './componentes/Auth';
import CadastroCliente from './crud/CadastroCliente';

function App() {

  return (
    <>
      <Auth>
        <h1>React Inovacao....</h1>
        <CadastroCliente></CadastroCliente>
      </Auth>
    </>
  );
}

export default App;
