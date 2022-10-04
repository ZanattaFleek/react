import React, { ChangeEvent, useEffect, useState } from 'react'

import './CadastroCliente.css'

interface rsClienteInterface {
    nome: string
    empresa: string
}

interface UFsInterface {
    id: number
    nome: string
    sigla: string
    regiao: {
        id: number
        nome: string
        sigla: string
    }
}

export default function CadastroCliente() {

    const URL_IBGE_UF: string = "https://servicodados.ibge.gov.br/api/v1/localidades/estados"

    const [isPendente, setIsPendente] = useState<boolean>(true)
    const [isErro, setIsErro] = useState<boolean>(false)
    const [UFS, setUFs] = useState<Array<string>>([])

    const [rsCliente, setRsCliente] = useState<rsClienteInterface>({
        nome: 'Zanatta',
        empresa: 'Fleek Cursos'
    })

    useEffect(() => {

        fetch(URL_IBGE_UF).then(rs => {

            setIsPendente(false)

            return rs.json()

        }).then((rs: Array<UFsInterface>) => {

            let tmpUFS: Array<string> = []

            rs.forEach((uf) => {
                tmpUFS.push(uf.sigla)
            })

            setUFs(tmpUFS.sort())

        }).catch(e => {

            setIsPendente(false)
            setIsErro(true)

        })

        console.log('Carregado 1x durante o load do componente')

        return function cleanup() {
            console.log('Dentro de CleanUp')
        }
    }, [])

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
            <label>UF</label>
            <select id="txtUF">
                <option>Selecione uma UF</option>
                {UFS.length > 0 && UFS.map(v => {
                    return (<option key={v}>{v}</option>)
                })}
            </select>
            <br />
            <input type="button" value="Exibir Nome" onClick={txtNomeClick} />

            {isPendente && <div>Lendo Dados do Servidor</div>}
            {isErro && <div>Erro ao Ler os Dados do Servidor</div>}

        </div>
    )
}

