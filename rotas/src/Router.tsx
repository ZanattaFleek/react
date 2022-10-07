import React from 'react'

import { createBrowserRouter } from 'react-router-dom';

import CadastroCliente from './Cadastros/CadastroCliente';
import CadastroFornecedor from './Cadastros/CadastroFornecedor';

import LayOut from './Layout/Layout';
import Login from './Login/Login';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayOut />,
        children: [
            {
                path: "cadastrocliente",
                element: <CadastroCliente />
            },
            {
                path: "cadastrofornecedor",
                element: <CadastroFornecedor />
            }
        ],
    },
    {
        path: "/login",
        element: <Login />,
    }
]);