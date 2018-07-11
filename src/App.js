import React, { Component } from "react";
import Counter from "./Counter";

// from .bin
import { Provider } from "./.bin";

// modifiers and default state
import { modifiers, defaultState } from "./modifiers";

class App extends Component {
  render() {
    return (
      <Provider setup={{ defaultState, modifiers }}>
        <Counter />
      </Provider>
    );
  }
}

export default App;
