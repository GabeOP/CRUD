import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Form from './components/Form';
import Cadastro from './components/Cadastro';


const router = createBrowserRouter([
  {
    path: "/planos",
    element: <App/>
  },
  {
    path: "/formulario",
    element: <Form/>
  },
  {
    path: "/cadastro",
    element: <Cadastro/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
