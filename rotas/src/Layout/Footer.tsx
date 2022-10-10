import React from 'react'
import { LoginContexto } from './Layout'

export default function Footer() {
    return (
        <>
            <LoginContexto.Consumer>
                {(value) => <>
                    <span className="footer">{value.nome}</span>
                </>}
            </LoginContexto.Consumer>
        </>
    )
}