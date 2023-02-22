import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../../../styles/styles.css'

class Nav extends Component {
  render() {
    return (
      <div className="nav-container">
        <div className="nav-logo"> NEWS APP</div>
        <div className="nav-links">
          <Link className="nav-link" to="/home">
            Home
          </Link>
          <Link className="nav-link" to="/form">
            Formulario
          </Link>
          <Link className="nav-link" to="/list">
            Lista de Noticias
          </Link>
        </div>
      </div>
    );
  }
}

export default Nav;
