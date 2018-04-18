import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

import TodoList from './TodoList';
import PostList from './PostList';

const Title = ({ title }) => (
  <h1>{title}</h1>
)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], posts: [], loading: false };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get('https://innoteq.vn/wp-json/wp/v2/posts');
    this.setState({ posts: res.data, loading: false });
  }

  handleDelete = index => {
    const newItems = this.state.items.filter((v, idx) => idx !== index);
    this.setState({ items: newItems });
  }

  handleAdd = newItem => this.setState(prevState => ({
    items: prevState.items.concat(newItem),
  }));

  render() {
    return (
      <div className='main'>
        <Title title='My First React App' />
        <TodoList
          title='hello'
          items={this.state.items}
          deleteItem={this.handleDelete}
          addTodoItem={this.handleAdd}
        />
        <PostList data={this.state.posts} loading={this.state.loading} />
      </div>
    );
  }
}

export default App;
