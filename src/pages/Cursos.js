import React from "react";

import messages from "../data/cursos.json";

export default class Cursos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: messages
    };
  }

  render() {
    return (
      <div>
        <h1 className="title">Você está na página de cursos!</h1>
        {this.props.children}
      </div>
    );
  }
}
