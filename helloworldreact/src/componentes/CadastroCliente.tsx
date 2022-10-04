import React, { ChangeEvent, useState } from 'react'

import './CadastroCliente.css'

interface rsClienteInterface {
    nome: string
    empresa: string
}

export default function CadastroCliente() {

    const [rsCliente, setRsCliente] = useState<rsClienteInterface>({
        nome: 'Zanatta',
        empresa: 'Fleek Cursos'
    })

    const txtNomeOnChange = (event: ChangeEvent<HTMLInputElement>) => {

        setRsCliente({
            ...rsCliente,
            nome: event.target.value
        })

    }

    const txtEmpresaOnChange = (event: ChangeEvent<HTMLInputElement>) => {

        setRsCliente({
            ...rsCliente,
            empresa: event.target.value
        })

    }

    const txtNomeClick = () => {
        alert('Oi '.concat(rsCliente.nome))
    }

    return (
        <div className='componenteCadastro'>
            <h2>Cadastro de Cliente</h2>

            <label>Nome</label>
            <input type="text" id="txtNome" onChange={txtNomeOnChange} />
            <label>Empresa</label>
            <input type="text" id="txtEmpresa" onChange={txtEmpresaOnChange} />
            <br />
            <input type="button" value="Exibir Nome" onClick={txtNomeClick} />
            <p>
                rsCliente.nome: {rsCliente.nome}
            </p>
            <p>
                rsCliente.empresa: {rsCliente.empresa}
            </p>
        </div>
    )
}

