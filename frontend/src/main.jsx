import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Form from './components/Form';
import Assinatura from './components/Assinatura';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/formulario",
    element: <Form/>
  },
  {
    path: "/assinatura",
    element: <Assinatura />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
