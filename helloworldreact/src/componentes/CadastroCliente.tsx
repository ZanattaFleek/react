import React, { ChangeEvent } from 'react'

import './CadastroCliente.css'

export default function CadastroCliente() {

    let nomeCliente: string = ""

    const txtNomeOnChange = (event: ChangeEvent<HTMLInputElement>) => {

        nomeCliente = event.target.value

    }

    const txtNomeClick = () => {
        alert('Oi '.concat(nomeCliente))
    }

    return (
        <div className='componenteCadastro'>
            <h2>Cadastro de Cliente</h2>

            <label>Nome</label>
            <input type="text" id="txtNome" onChange={txtNomeOnChange} />
            <input type="button" value="Exibir Nome" onClick={txtNomeClick} />

        </div>
    )
}

