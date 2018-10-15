import React from "react";
import PropTypes from "prop-types";

export default class Geyzo extends React.Component {
  constructor() {
    super();
  }

  render() {
    let array = [];
    //const { diretorDeTv } = this.props;
    const { sandoval1 } = this.props;

    sandoval1.map(image => {
      array.push(<img src={image.cep} alt="" className="img-responsive" />);
    });

    return <div> {array} </div>;
  }
}
