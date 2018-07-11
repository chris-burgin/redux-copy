import React, { Component } from "react";
import Context from "./context";

const Connect = (stateToProps, actionsToProps, WrappedComponent) =>
  class WrapperComponent extends Component {
    createConnection = ({ manager }) => {
      return {
        ...stateToProps(manager.getState()),
        ...actionsToProps((...v) => manager.modify(this.refresh, ...v))
      };
    };

    refresh = () => this.forceUpdate();

    render() {
      return (
        <Context.Consumer>
          {context => (
            <WrappedComponent
              {...this.props}
              {...this.createConnection(context)}
            />
          )}
        </Context.Consumer>
      );
    }
  };

export default Connect;
