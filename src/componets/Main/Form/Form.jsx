import React, { Component } from 'react'
// import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../../../styles/styles.css'

export class Form extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.name.value);
    const newsName = event.target.titular.value;
    const noticia = event.target.noticia.value;
    const url = event.target.url.value;

    const newEvent = {
      newsName,
      noticia,
      url,
    };

    console.log(newEvent);
    alert("Enviado!!!!!!");
    // Guardar nuevo evento
    // (En el futuro puede ser un POST a una API)
    this.setState({ events: [...this.state.events, newEvent] });
  }

  render() {
    return (
      <div className='form-container'>
        <h1>CREA UNA NUEVA NOTICIA:</h1>
        <Box onSubmit={this.handleSubmit}
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              required
              id="titular"
              label="Titular"
              variant="standard"
              className="form-textfield"
              onChange={this.handleChange}
            />
            <TextField
              required
              id="noticia"
              label="Noticia"
              variant="standard"
              className="form-textfield"
            />
            <TextField
              required
              id="url"
              label="Url"
              variant="standard"
              className="form-textfield"
            />
            <input type="submit" value="Añadir" />

        </Box>  
      </div>
    )
  }
}

export default Form
