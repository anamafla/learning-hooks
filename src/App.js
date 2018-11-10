import React, { Component } from "react";
import Example from "./Example";
import Greeting from "./Greeting";
import ExampleUseEffect from "./ExampleUseEffect";

import "./App.css";
import LightBulb from "./LightBulb";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Learning Hooks </h1>
        <Example />
        <Greeting />
        <LightBulb />
        <ExampleUseEffect />
      </div>
    );
  }
}

export default App;
