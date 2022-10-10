import React from 'react'

import { Outlet } from 'react-router-dom'

import Footer from './Footer'
import Header from './Header'

import './Layout.css'

const loginContextoPadrao = { logado: false, nome: 'Zanatta' }

export const LoginContexto = React.createContext({ ...loginContextoPadrao })

export default function LayOut() {
    return (
        <>
            <LoginContexto.Provider value={loginContextoPadrao}>
                <Header />
                <Outlet />
                <Footer />
            </LoginContexto.Provider>
        </>
    )
}