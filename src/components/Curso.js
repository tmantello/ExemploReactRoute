import React from "react";

const cursos = [
  { nome: "React" },
  { nome: "Redux" },
  { nome: "Node" },
  { nome: "C#" }
];

export default class Curso extends React.Component {
  constructor() {
    super();
  }
  render() {
    return <h1>Atualmente no curso {cursos[this.props.params.id].nome}</h1>;
  }
}
