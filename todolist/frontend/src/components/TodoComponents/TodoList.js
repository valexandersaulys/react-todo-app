import React from "react";
import PropTypes from "prop-types";

import Form from "./Form.js";
import Todos from "./Todos.js";

import handleDelete from "../../actions/todos";

const propTypes = {
  handlDelete: PropTypes.func.isRequired
};

const defaultProps = {};

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Hello World! This is the TodoList component</h1>
        <Form />
        <Todos />
        <button onClick={this.props.handleDelete}>Delete</button>
      </div>
    );
  }
}

TodoList.propTypes = propTypes;
TodoList.defaultProps = defaultProps;

export default connect(
  null,
  { handleDelete }
)(TodoList);
