import React from 'react'

import { Outlet } from 'react-router-dom'

import Footer from './Footer'
import Header from './Header'

import './Layout.css'

export default function LayOut() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}