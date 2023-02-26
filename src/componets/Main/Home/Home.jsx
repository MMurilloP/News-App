import React, { Component } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import userContext from "../../../context/userContext"; 

import "../../../styles/styles.css";

class Home extends Component {
  static contextType = userContext; 
  constructor(props) {
    super(props);
    this.username = React.createRef();
    this.state = {
      username: "",
    };
  }

  sendName = () => {
    const { login } = this.context; 
    login(this.state.username); 
    alert("Nombre enviado: " + this.state.username);
    this.username.current.value = "";
    this.setState({ username: "" });
  };

  handleChange = () => {
    const username = this.username.current.value; 
    this.setState({ username });
  };

  render() {
    return (
      <div className="home-container">
        <h1>Bienvenido a News-App</h1>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="standard-basic"
            type="text"
            inputRef={this.username}
            onChange={this.handleChange}
            label="Introduce tu nombre"
            variant="standard"
            className="form-textfield"
          />
          <Button
            variant="contained"
            onClick={this.sendName}
            disabled={!this.state.username}
          >
            Login
          </Button>
        </Box>
      </div>
    );
  }
}

export default Home;
