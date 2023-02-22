import React, { Component } from 'react'

export class Form extends Component {

  render() {
    return (
      <div>
        <h1>CREA UNA NUEVA NOTICIA:</h1>
        <form action="">
          <label htmlFor="">Titular</label>
          <input type="text" placeholder='Introduce el titular de la noticia'/>
          <label htmlFor="">Descripcion</label>
          <input type="text" placeholder='Describe brevemente la noticia'/>
          <label htmlFor="">Url</label>
          <input type="text" placeholder='Introduce la URL de la noticia'/>
          <input type="submit" />
        </form>
        
      </div>
    )
  }
}

export default Form
