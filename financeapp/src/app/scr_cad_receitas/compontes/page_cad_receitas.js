import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

function CadastroReceita({ 
    onNovaReceita 
}) {

 const [descricao, setDescricao] = useState('');
 const [formaPgto, setFormaPgto] = useState('');
 const [valor, setValor] = useState('');
 const [dataRecebimento, setDataRecebimento] = useState('');

 const adicionarReceita = () => {
    const novaReceita = new Receita(
      Math.random().toString(), // Gerando um ID aleatorio como exemplo
      descricao,
      formaPgto,
      valor,
      dataRecebimento
    );
    onNovaReceita(novaReceita);
    setDescricao('');
    setFormaPgto('');
    setValor('');
    setDataRecebimento('');
 };

 return (
    <div>
      <label>Descrição:</label>
      <InputText value={descricao} onChange={(e) => setDescricao(e.target.value)} />
      <label>Forma de Pagamento:</label>
      <InputText value={formaPgto} onChange={(e) => setFormaPgto(e.target.value)} />
      <label>Valor:</label>
      <InputText value={valor} onChange={(e) => setValor(e.target.value)} />
      <label>Data de Recebimento:</label>
      <InputText value={dataRecebimento} onChange={(e) => setDataRecebimento(e.target.value)} />
      <Button label="Adicionar Receita" onClick={adicionarReceita} />
    </div>
 );
}

export default CadastroReceita;
