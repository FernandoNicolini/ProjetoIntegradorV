import React, { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

class Receita {
  constructor(id, descricao, formaPgto, valor, dataRecebimento) {
    this.id = id;
    this.descricao = descricao;
    this.formaPgto = formaPgto;
    this.valor = valor;
    this.dataRecebimento = dataRecebimento;
  }
}

export default Receita;
