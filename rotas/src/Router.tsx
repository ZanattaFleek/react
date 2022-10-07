import React from 'react'
import { createBrowserRouter } from "react-router-dom";

import Login from './Login/Login'
import Layout from './Layout/Layout'
import CadastroCliente from './Cadastros/CadastroCliente'
import CadastroFornecedor from './Cadastros/CadastroFornecedor'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "cadastroCliente",
        element: <CadastroCliente />,
      },
      {
        path: "cadastroFornecedor",
        element: <CadastroFornecedor />,
      }
    ],
  },
  {
    path: "/Login",
    element: <Login />
  }
]);