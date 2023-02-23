import React, { Component } from "react";
import Card from './Card/Card'
import { v4 as uuidv4 } from 'uuid';

class ListNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appNews: [],
      newsTopic: "Health"
    };
  }

  componentDidMount() {
    this.fetchApiNews();
  }

  fetchApiNews = async () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const { newsTopic } = this.state;
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${newsTopic}&api-key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      appNews: data.response.docs
    });
  };

  deleteNew = (i) => {
    const remainingNews = this.state.appNews.filter((event, j) => i !== j);
    this.setState({ appNews: remainingNews });
  };
  
  printCards = () => {
    const appNewsSlice = this.state.appNews.slice(0, 5); //saco solo 5 noticias de la api.
    return appNewsSlice.map((event, i) => (
      <Card data={event} remove={() => this.deleteNew(i)} key={uuidv4()} />
    ));
  };

  render() {
    const { newsTopic } = this.state;

    return (
      <div>
        <h1>LISTA DE NOTICIAS</h1>
        <h2>Estas son las noticias de {newsTopic}</h2>
        {this.printCards()}
      </div>
    );
  }
}

export default ListNews;
