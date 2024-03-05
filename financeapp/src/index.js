import * as React from "react";
import ReactDOM, { createRoot } from 'react-dom/client'; // Importa de react-dom/client
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./app/tela_login/Login";
import { LancamentoDespesa } from "./app/tela_lancamento_despesa/LancamentoDespesa";
import { Home } from "./app/tela_home/Home";


// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Home />
//     },
//     {
//         path: "LancamentoDespesa",
//         element: <LancamentoDespesa />
//     }
// ]);

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
        children: [
            {
                path: "/",
                element: <Login />
            },
        ]
    },
    {
        path: "LancamentoDespesa",
        element: <LancamentoDespesa />
    },
    {
        path: "Home",
        element: <Home />
    }
]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);