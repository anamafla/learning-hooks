import React, { Component } from "react";
import Example from "./Example";
import Greeting from "./Greeting";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Learning Hooks </h1>
        <Example />
        <Greeting />
      </div>
    );
  }
}

export default App;
