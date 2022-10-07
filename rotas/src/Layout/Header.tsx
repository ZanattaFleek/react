import React from 'react'

import './Header.css'

export default function Header() {
    return (
        <>
            <div className="topnav">
                <a className="active" href="/">Home</a>
                <a href="/cadastrocliente/10000">Cliente</a>
                <a href="/cadastrofornecedor">Fornecedor</a>
                <a href="/login">Login</a>
            </div>
        </>
    )
}