import React from 'react'

import { useParams } from 'react-router-dom'
import { LoginContexto } from '../Layout/Layout'

export default function CadastroCliente() {

    const { idCliente } = useParams()

    return (
        <LoginContexto.Consumer>
            {
                ({ nome }) => <>
                    <h1>Cadastro de Cliente {idCliente} </h1>
                    <h3>Bem Vindo: {nome}</h3>
                </>
            }
        </LoginContexto.Consumer>

    )
}