import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { addTodo } from "../../actions/todos";

const propTypes = {};

const defaultProps = {};

/* This displays the form for entering new todos */
class Form extends React.Component {
  state = {
    name: "",
    done: false
  };

  constructor(props) {
    super(props);
  }

  // Handle changes when made
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  // Handle form submission logic
  onSubmit = e => {
    e.preventDefault();
    const { name, done } = this.state;
    this.props.addTodo({ name, done });
  };

  render() {
    const { name, done } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Name</label>
            <input
              name="name"
              type="text"
              value={name}
              onChange={this.onChange}
            />
          </div>
          <div>
            <label>Done?</label>
            <input
              name="done"
              type="checkbox"
              value={done}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;

export default connect(
  null,
  { addTodo }
)(Form);
