import React from "react";
import axios from "axios";
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

    this.state = { username: "", username2: [], gender: [] };
    this.handleClick = this.handleClick.bind(this); // obrigatório para manter o contexto do clique do botão dentro da função que busca o dado no json
    this.handleClick2 = this.handleClick2.bind(this);
  }

  handleClick() {
    axios
      .get("https://api.github.com/users/tmantello")
      .then(response => {
        this.setState({
          username: response.data.id + " - " + response.data.name
        });
      })
      .catch(e => {
        console.error(e);
      });
  }

  handleClick2() {
    axios
      .get("https://randomuser.me/api/?results=2")
      .then(response => {
        // var arrayTeste = [];
        // response.data.results.map(teste => arrayTeste.push(teste));
        this.setState({ username2: response.data.results });
        debugger;
      })
      .catch(e => {
        console.error(e);
      });
  }

  render() {
    var teste2 = "";
    // existe uma div invisível que faz o processo de alimentação de teste2 a partir do webservice chamado em handleClick2
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
        <b>CURSOS DISPONÍVEIS</b>
        <ul>{listItems}</ul>
        <hr />
        <button className="button" onClick={this.handleClick}>
          Clique aqui
        </button>
        <br />
        {this.state.username}
        <br />
        <button className="button" onClick={this.handleClick2}>
          Clique aqui
        </button>
        <br />
        <div style={{ display: "none" }}>
          {this.state.username2.map(
            au => (teste2 += au.name.first + " - " + au.gender + "\n")
          )}
        </div>
        <br />
        {teste2}
      </div>
    );
  }
}
