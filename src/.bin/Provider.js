import React, { Component } from "react";
import Context from "./context";
import manager from "./manager";

class Provider extends Component {
  render() {
    return (
      <Context.Provider
        value={{
          manager: manager(
            this.props.setup.defaultState,
            this.props.setup.modifiers
          )
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Provider;
