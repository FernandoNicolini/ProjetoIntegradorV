import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

function TabelaReceitas({ 
    receitas 
}) {
 return (
    <DataTable value={receitas}>
      <Column field="descricao" header="Descricao" />
      <Column field="formaPgto" header="Forma de Pagamento" />
      <Column field="valor" header="Valor" />
      <Column field="dataRecebimento" header="Data de Recebimento" />
    </DataTable>
 );
}

export default TabelaReceitas;
