import React, { Fragment } from 'react';

import Form from './Form';

class TodoList extends React.Component {

  handleSubmit = (e, value) => {
    e.preventDefault();
    if (!value.length) {
      return;
    }
    const newItem = {
      text: value,
      id: Date.now()
    };
    this.props.addTodoItem(newItem);
  }

  renderTodoItem = () => this.props.items.map((item, index) => (
    <li key={item.id}>
      {item.text}
      <a style={{ cursor: 'pointer' }} onClick={() => this.props.deleteItem(index)}> [delete]</a>
    </li>
  ))

  render() {
    return (
      <Fragment>
        <h3>todo list</h3>
        <Form handleSubmit={this.handleSubmit} />
        <ul>
          {this.renderTodoItem()}
        </ul>
      </Fragment>
    );
  }
}

export default TodoList;