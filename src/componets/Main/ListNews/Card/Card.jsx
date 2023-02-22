import React, { Component } from "react";
import './Card.css'

class Card extends Component {
  render() {
    return (
      <div className="news-card">
          <p><strong>Titular: </strong> {this.props.data.abstract}</p>
          <p><strong>Resumen:</strong>{this.props.data.snippet} </p>
          <a href={this.props.data.web_url} target="_blank" rel="noopener noreferrer">Ve a la noticia</a>
          <p>Fuente: {this.props.data.source}</p>
          <button
            className="css-button-sliding-to-left--red"
            onClick={this.props.remove}>
            Borrar Noticia
          </button>
      </div>
    );
  }
}

export default Card;
