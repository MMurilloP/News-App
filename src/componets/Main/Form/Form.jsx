import React, { Component } from 'react'
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../../../styles/styles.css'

export class Form extends Component {

  render() {
    return (
      <div className='form-container'>
        <h1>CREA UNA NUEVA NOTICIA:</h1>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
            <TextField
              id="standard-basic"
              label="Titular"
              variant="standard"
              className="form-textfield"
            />
            <TextField
              id="standard-basic"
              label="Noticia"
              variant="standard"
              className="form-textfield"
              multiline
              rows={4}
            />
            <TextField
              id="standard-basic"
              label="Url"
              variant="standard"
              className="form-textfield"
            />
            <Button
              variant="contained"
              className="css-button-sliding-to-left--red"
              onClick={""}
            >
              CREAR NOTICIA
            </Button>
        </Box>  
      </div>
    )
  }
}

export default Form
