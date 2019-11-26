import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { markTodo } from "../../actions/todos";

const propTypes = {};

const defaultProps = {};

class Todo extends React.Component {
  constructor(props) {
    super(props);
    const { passed_key, name, done } = props;
    this.state = { passed_key, name, done };
  }

  onChange = e => {
    const { passed_key, name, done } = this.state;
    this.props.markTodo({ id: passed_key, name, done: !done });
    this.setState({ done: !done });
  };

  render() {
    console.log(this.state.done);

    return (
      <tr>
        <td>{this.state.passed_key}</td>
        <td>{this.state.name}</td>
        <td>
          <input
            name="done"
            type="checkbox"
            onChange={this.onChange}
            checked={this.state.done}
          />
        </td>
      </tr>
    );
  }
}

Todo.propTypes = propTypes;
Todo.defaultProps = defaultProps;

export default connect(
  null,
  { markTodo }
)(Todo);
