import React, { Component } from 'react';

class PostList extends Component {
  renderListItem = () => this.props.loading
    ? <p>Loading</p>
    : this.props.data.map((item, index) => (
      <li key={item.title.rendered + index}>
        <a href={item.link}>{item.title.rendered}</a>
      </li>
    ))

 render() {
    return (
      <div>
        <h3>articles list</h3>
        <ul>
          {this.renderListItem()}
        </ul>
      </div>
    );
  }
}

export default PostList;