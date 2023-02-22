import React, { Component } from "react";

class Home extends Component {
  render() {
    return <div>
      <h1>BIENVENIDO A NEWS-APP</h1>
      <h2>Introduce tu nombre:</h2>
      <input type="text"></input>
      <input type="submit" value="Enviar"/>
      </div>;
  }
}

export default Home;
