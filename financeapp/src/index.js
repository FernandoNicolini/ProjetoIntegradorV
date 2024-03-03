import App from "./App";

import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa de react-dom/client


// const root = createRoot(document.getElementById("root"));

// root.render(<App />);




const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
    <App />
);