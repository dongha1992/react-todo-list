import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit } = this.props;

    return (
      <div className="TodoItem">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="fas fa-book"></i>
              </div>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="add a todo item"
              value={item}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn">
            add item
          </button>
        </form>
      </div>
    );
  }
}

export default TodoInput;
