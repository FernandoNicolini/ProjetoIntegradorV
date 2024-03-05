import React from "react";
import GlobalStyle from "./styles/global";
import { Header } from "./components/Header";

const App = () => {

    return (
        <div className="App">
            <Header />
            <GlobalStyle />
        </div>
    )
}

export default App;