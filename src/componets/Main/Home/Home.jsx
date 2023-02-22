import React, { Component } from "react";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../../../styles/styles.css'


class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <h1>BIENVENIDO A NEWS-APP</h1>
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
            label="Introduce tú nombre"
            variant="standard"
            className="form-textfield"
          />
          <Button
            variant="contained"
            className="css-button-sliding-to-left--red"
            onClick={""}
          >
            LOGIN
          </Button>
        </Box>
      </div>
    );
  }
}

export default Home;
