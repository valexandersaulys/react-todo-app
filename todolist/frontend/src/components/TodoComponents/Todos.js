import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Table } from "react-bootstrap";

import Todo from "./Todo";
import { getAllTodos } from "../../actions/todos";

const propTypes = {
  todos: PropTypes.array.isRequired,
  getAllTodos: PropTypes.func.isRequired
};

const defaultProps = {
  todos: [{ id: 1, name: "this is some text", done: false }]
};

/* This displays the list of todos we have */
class Todos extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllTodos();
  }

  render() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>name</th>
            <th>done?</th>
          </tr>
        </thead>
        <tbody>
          {this.props.todos.map(todo => (
            <Todo
              key={todo.id}
              passed_key={todo.id}
              name={todo.name}
              done={todo.done}
            />
          ))}
        </tbody>
      </Table>
    );
  }
}

Todos.propTypes = propTypes;
Todos.defaultProps = defaultProps;

/* 
  Connect up the Reducer state to our component.
  
  Has to be nested because we're following state._reducerName_._Obj_.
*/
const mapStateToProps = state => ({
  todos: state.todos.todos
});

export default connect(
  mapStateToProps,
  { getAllTodos }
)(Todos);
