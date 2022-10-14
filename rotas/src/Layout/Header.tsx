import React from 'react'
import { NavLink } from 'react-router-dom'

import './Header.css'

export default function Header() {
    return (
        <>
            <div className="topnav">
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/cadastrocliente/10000">Cliente</NavLink>
                <NavLink to="/cadastrofornecedor">Fornecedor</NavLink>
                <NavLink to="/login">Login</NavLink>
            </div>
        </>
    )
}