import React, { Component } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "../../../../styles/styles.css";

class Cards extends Component {
  render() {
    return (
      <div className="cards-container">
        <Card className="card-mui-container" sx={{ maxWidth: 800 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="100"
              image="https://cdn.pixabay.com/photo/2016/02/01/00/56/news-1172463_1280.jpg"
              alt="picture"
            />
            <CardContent>
              <Typography className="typography-news" gutterBottom variant="h4" component="div">
                {this.props.data.abstract}
              </Typography>
              <Typography className="typography-news"variant="body1" color="text.secondary">
                {this.props.data.snippet}
              </Typography>
              <Typography className="typography-news"gutterBottom variant="h7" component="div">
                <a
                  href={this.props.data.web_url}
                  target="_blank"
                  rel="noopener noreferrer">
                  {this.props.data.web_url}
                </a>
              </Typography>
              <Typography className="typography-news" gutterBottom variant="h9" component="div">
                Source: {this.props.data.source}
              </Typography>
            </CardContent>
          </CardActionArea>
          <Button
            variant="contained"
            className="css-button-sliding-to-left--red"
            onClick={this.props.remove}
          >
            Borrar Noticia
          </Button>
        </Card>
      </div>
    );
  }
}

export default Cards;
