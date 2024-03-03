import React from "react";
import GlobalStyle from "./styles/global";
import { Header } from "./components/Header";
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Inicio } from "./app/tela_inicio";

const App = () => {
    return (

        <Router>
            <Routes>
                <Route path="/Home" element={Inicio} />
            </Routes>
            <Header />
            <GlobalStyle />
        </Router>
    )
}

export default App;