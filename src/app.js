import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import App from "./pages/App";

import Home from "./pages/Home";
import Cursos from "./pages/Cursos";
import Sobre from "./pages/Sobre";

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/cursos" component={Cursos} />
      <Route path="/sobre" component={Sobre} />
    </Route>
  </Router>,
  document.getElementById("app")
);
