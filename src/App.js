import React, { Component } from "react";
import Example from "./Example";
import Greeting from "./Greeting";
import ExampleUseEffect from "./ExampleUseEffect";

import "./App.css";
import LightBulb from "./LightBulb";
import ExampleUseContext from "./ExampleUseContext";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Learning Hooks </h1>
        <Example />
        <Greeting />
        <LightBulb />
        <ExampleUseEffect />
        <ExampleUseContext />
      </div>
    );
  }
}

export default App;
