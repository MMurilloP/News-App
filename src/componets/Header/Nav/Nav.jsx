import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../../../styles/styles.css'
import userContext from '../../../context/userContext'; //contexto
import Button from '@mui/material/Button';



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
            Listado de Noticias
          </Link>
        <div className="userLogged">
          <userContext.Consumer>
        {({ logout, user }) => user ?
          <span>Hola, {user} <Button variant="contained" size="small" onClick={logout}>Logout</Button></span>
          : ""
        }
      </userContext.Consumer>
      </div>

        </div>
      </div>
    );
  }
}

export default Nav;
