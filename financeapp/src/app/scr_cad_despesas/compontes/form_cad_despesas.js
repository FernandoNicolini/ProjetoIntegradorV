import React, { useState } from 'react';

const FormularioDespesa = () => {
    const [despesa, setDespesa] = useState({
        id: '',
        descricao: '',
        dt_vencimento: '',
        forma_pgto: '',
        valor: ''
    });

    

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="id">ID:</label>
                <input type="text" id="id" name="id" value={despesa.id} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="descricao">Descrição:</label>
                <input type="text" id="descricao" name="descricao" value={despesa.descricao} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="dt_vencimento">Data de Vencimento:</label>
                <input type="date" id="dt_vencimento" name="dt_vencimento" value={despesa.dt_vencimento} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="forma_pgto">Forma de Pagamento:</label>
                <input type="text" id="forma_pgto" name="forma_pgto" value={despesa.forma_pgto} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="valor">Valor:</label>
                <input type="number" id="valor" name="valor" value={despesa.valor} onChange={handleChange} />
            </div>
            <button type="submit">Lançar Despesa</button>
        </form>
    );
};

export default FormularioDespesa;