import React, { useState } from 'react';
import InputText from '../componentes/InputText';

import './CadastroCliente.css'

interface rsClienteInterface {
    nome: string
    empresa: string
}

function CadastroCliente() {

    const [rsCliente, setRsCliente] = useState<rsClienteInterface>({
        nome: '',
        empresa: ''
    })
    
    return (
        <>
            <h1>Cadastro de Cliente</h1>
            <InputText type="text" placeholder='Nome' campo='nome' label='Nome' update={setRsCliente} registro={rsCliente}   />
            <InputText type="text" placeholder='Empresa' campo='empresa' label='Empresa' update={setRsCliente} registro={rsCliente}  />
        </>
    );
}

export default CadastroCliente;