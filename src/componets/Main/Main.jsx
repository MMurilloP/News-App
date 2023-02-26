import React, { Component } from "react";
import Form from './Form/Form'
import ListNews from './ListNews/ListNews'
import Home from './Home/Home'
import { Routes, Route } from "react-router-dom";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsList: [],
      newsTopic: "Health"
    };
  }

  addNews = (news) => {
    this.setState((prevState) => ({
      newsList: [...prevState.newsList, news],
    }));
  };

  render() {
    return (
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route
            path="/form"
            element={<Form onSubmit={this.addNews} />}
          />
          <Route
            path="/list"
            element={<ListNews newsList={this.state.newsList} />}
          />
        </Routes>
      </div>
    );
  }
}

export default Main;
