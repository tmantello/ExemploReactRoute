import React from "react";

import messages from "../data/cursos.json";

const cursos = [
  { nome: "CIENCIA" },
  { nome: "SISTEMAS" },
  { nome: "ADMINISTRAÇÃO" },
  { nome: "NATUROLOGIA" }
];

const listItems = messages.map(messages => (
  <li>
    {messages.id}&nbsp;-&nbsp;{messages.nome}
  </li>
));

export default class Curso extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Atualmente no curso {cursos[this.props.params.id].nome}</h1>
        <br />
        Curso:&nbsp;
        {messages[this.props.params.id].id}
        &nbsp;-&nbsp;
        {messages[this.props.params.id].nome}
        <br />Duração:&nbsp;
        {messages[this.props.params.id].periodos}&nbsp;-&nbsp;
        {messages[this.props.params.id].tipo}
        <br />Coordenador:&nbsp;
        {messages[this.props.params.id].coordenador}
        <br />Ativo:&nbsp;
        {String(messages[this.props.params.id].ativo)}
        &nbsp;&nbsp;
        <b>{messages[this.props.params.id].ativo ? "ativo" : "inativo"}</b>
        <br />Descrição:&nbsp;
        {messages[this.props.params.id].descricao}
        <br />
        <hr />
        <br />
        <h1>
          <b>CURSOS DISPONÍVEIS</b>
        </h1>
        <ul>{listItems}</ul>,
      </div>
    );
  }
}
