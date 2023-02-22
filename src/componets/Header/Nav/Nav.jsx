import React, { Component } from "react";
import { Link } from "react-router-dom";



class Nav extends Component {
  render() {
    return <div className="Nav">
      <Link to="/home">Home</Link>
      <Link to="/form">Formulario</Link>
      <Link to="/list">Lista de Noticias</Link>
      </div>;
  }
}

export default Nav;
