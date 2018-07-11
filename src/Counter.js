import React, { Component } from "react";

// from .bin
import { Connect, Provider } from "./.bin";

class Test extends Component {
  render() {
    return (
      <div>
        {this.props.count}
        <button onClick={() => this.props.add(1)}> + </button>
        <button onClick={() => this.props.dec(1)}> - </button>
      </div>
    );
  }
}

const stateToProps = state => ({
  count: state.count
});

const actionsToProps = dispatch => ({
  add: val => dispatch("INC", val),
  dec: val => dispatch("DEC", val)
});

export default Connect(stateToProps, actionsToProps, Test);
