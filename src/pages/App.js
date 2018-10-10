import React from "react";
import { Link, IndexLink } from "react-router";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar" aria-label="main navigation">
          <div className="navbar-menu is-active">
            <div class="navbar-start">
              <IndexLink to="/" className="navbar-item">
                Home
              </IndexLink>
              <Link to="/cursos" className="navbar-item">
                Cursos
              </Link>
              <Link to="/sobre" className="navbar-item">
                Sobre
              </Link>
            </div>
          </div>
        </nav>
        <section className="section">
          <div className="container">{this.props.children}</div>
        </section>
      </div>
    );
  }
}
