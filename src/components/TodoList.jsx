import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete } = this.props;
    return (
      <div className="TodoList">
        <ul className="list-group">
          <h3>TO DO LIST</h3>
          {items.map((item) => {
            return (
              <TodoItem
                key={item.id}
                title={item.title}
                handleDelete={() => {
                  handleDelete(item.id);
                }}
              />
            );
          })}

          <button type="button" onClick={clearList}>
            claer List
          </button>
        </ul>
      </div>
    );
  }
}

export default TodoList;
