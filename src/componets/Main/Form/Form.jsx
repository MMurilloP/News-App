import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../../../styles/styles.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img:"",
      url: "",
      snippet: "",
      abstract: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { url, snippet, abstract } = this.state;
    const newNews = {
      web_url: url,
      abstract: abstract,
      snippet: snippet,
    };
    this.props.onSubmit(newNews);
  };

  render() {
    return (
      <div className="form-container">
        <h1>Añade tú noticia:</h1>
        <Card variant="outlined">
          <CardMedia
            component="img"
            height="100"
            image="https://cdn.pixabay.com/photo/2016/02/01/00/56/news-1172463_1280.jpg"
            alt="picture"
          />
          <CardContent>
            <TextField
              required
              id="abstract"
              label="Titular"
              variant="standard"
              className="form-textfield"
              onChange={this.handleChange}
            />
            <TextField
              required
              id="snippet"
              label="Noticia"
              variant="standard"
              className="form-textfield"
              onChange={this.handleChange}
            />
            <TextField
              required
              id="url"
              label="Url"
              variant="standard"
              className="form-textfield"
              onChange={this.handleChange}
            />
          </CardContent>

          <CardActions>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              onClick={this.handleSubmit}
            >
              Añadir
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default Form;
