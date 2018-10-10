import React from "react";

export default class Cursos extends React.Component {
  render() {
    return (
      <div>
        <h1 className="title">Você está na página de cursos!</h1>
        {this.props.children}
      </div>
    );
  }
}
