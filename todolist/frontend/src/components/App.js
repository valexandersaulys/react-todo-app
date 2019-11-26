import React from "react";
import PropTypes from "prop-types";

import TodoList from "./TodoComponents/TodoList";

const propTypes = {};

const defaultProps = {};

/* This is for store info */
import store from "../store";
import { Provider } from "react-redux";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <TodoList />
        </div>
      </Provider>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
