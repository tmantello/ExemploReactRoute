import React from "react";
import axios from "axios";
import messages from "../data/cursos.json";
import nl2br from "react-newline-to-break";
import Geyzo from "../components/Geyzo";

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

var teste2 = "";
var teste3 = "";
var imagens;

export default class Curso extends React.Component {
  constructor() {
    let array = [
      "https://randomuser.me/api/portraits/thumb/men/7.jpg",
      "https://randomuser.me/api/portraits/thumb/men/94.jpg"
    ];

    imagens = array.map(image => {
      return <img key={image} src={image} alt="" className="img-responsive" />;
    });

    super();

    this.state = {
      username: "",
      username2: [],
      arrayimagens: [],
      teste4: [],
      sandoval: []
    };
    this.handleClick = this.handleClick.bind(this); // obrigatório para manter o contexto do clique do botão dentro da função que busca o dado no json
    this.handleClick2 = this.handleClick2.bind(this);

    //var teste4 = [];
    // existe uma div invisível que faz o processo de alimentação de teste2 a partir do webservice chamado em handleClick2
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
    var that = this;

    axios
      .get("https://randomuser.me/api/?results=2")
      .then(function(response) {
        var arrayTeste = [];

        response.data.results.map(teste => {
          arrayTeste.push({
            cep: teste.picture.thumbnail
          });
        });

        that.setState({
          username2: response.data.results,
          sandoval: arrayTeste
        });
      })
      .catch(e => {
        console.error(e);
      });
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
            au =>
              (teste2 +=
                au.name.first +
                "-" +
                au.gender +
                " <img src='" +
                au.picture.thumbnail +
                "' />\n") + (teste3 = au.picture.thumbnail)
          )}
        </div>
        <br />
        pulando linha com teste2 (usando nl2br do react-newline-to-break):<br />
        {nl2br(teste2)}
        <br />
        <br />
        <br />
        imagem de teste3 (último do WS)):<br />
        <img src={teste3} />
        <br />
        <br />
        <br />alimentando via let (declaração fixa):<br />
        {imagens}
        <br />
        <br />
        <br />
        de componente (webservice - json):<br />
        <Geyzo sandoval1={this.state.sandoval} />
      </div>
    );
  }
}
