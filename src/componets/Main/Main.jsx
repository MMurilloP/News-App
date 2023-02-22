import React, { Component } from "react";
import Form from './Form/Form'
import ListNews from './ListNews/ListNews'
import Home from './Home/Home'
import { Routes, Route } from "react-router-dom";

class Main extends Component {
  render() {
    return <div>
      <Routes>
        <Route path ="/home" element = {<Home/>}/>
        <Route path ="/form" element = {<Form/>}/>
        <Route path ="/list" element = {<ListNews/>}/>
      </Routes>

    </div>;
  }
}

export default Main;
