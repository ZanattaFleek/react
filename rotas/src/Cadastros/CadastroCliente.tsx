import React from 'react'

import { useParams } from 'react-router-dom'

export default function CadastroCliente() {

    const { idCliente } = useParams()

    return (
        <>
            <h1>Cadastro de Cliente {idCliente}</h1>
        </>
    )
}