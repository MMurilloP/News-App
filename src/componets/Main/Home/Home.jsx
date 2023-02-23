import React, { Component } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import userContext from "../../../context/userContext"; // contexto

import "../../../styles/styles.css";

class Home extends Component {
  static contextType = userContext; //Contexto desde JS con clases
  constructor(props) {
    super(props);
    this.username = React.createRef();
    this.state = {
      username: "",
    };
  }

  sendName = () => {
    const { login } = this.context; // Consume contexto desde JS
    login(this.state.username); 
    alert("Nombre enviado: " + this.state.username);
    this.username.current.value = "";
    this.setState({ username: "" });
  };

  handleChange = () => {
    const username = this.username.current.value; //Leer campo por referencia
    this.setState({ username });
  };

  render() {
    return (
      <div className="home-container">
        <h1>BIENVENIDO A NEWS-APP</h1>
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

// class Home extends Component {
//   render() {
//     return (
//       <div className="home-container">
//         <h1>BIENVENIDO A NEWS-APP</h1>
//         <Box
//           component="form"
//           sx={{
//             '& > :not(style)': { m: 1, width: '25ch' },
//           }}
//           noValidate
//           autoComplete="off"
//         >
//           <TextField
//             id="standard-basic"
//             label="Introduce tú nombre"
//             variant="standard"
//             className="form-textfield"
//           />
//           <Button
//             variant="contained"
//             className="css-button-sliding-to-left--red"
//             onClick={""}
//           >
//             LOGIN
//           </Button>
//         </Box>
//       </div>
//     );
//   }
// }
// export default Home;
