import React, { useState } from 'react';
import CadastroReceita from './app/scr_cad_receitas/compontes/page_cad_receitas'; // Ajuste o caminho conforme necessario
import TabelaReceitas from './app/scr_cad_receitas/compontes/dataTable_receitas'; // Ajuste o caminho conforme necessario
import Receita from './app/scr_cad_receitas/Receita'; // Ajuste o caminho conforme necessario

function App() {
 const [receitas, setReceitas] = useState([]);

 const adicionarNovaReceita = (novaReceita) => {
    setReceitas([...receitas, novaReceita]);
 };

 return (
    <div>
      <CadastroReceita onNovaReceita={adicionarNovaReceita} />
      <TabelaReceitas receitas={receitas} />
    </div>
 );
}

export default App;
