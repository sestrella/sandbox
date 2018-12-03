import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Posts extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    this.props.client.getPosts().then(({ data }) => {
      this.setState({ posts: data });
    });
  }

  render() {
    return (
      <ul>
        {this.state.posts.map(post => <Post key={post.id} post={post} />)}
      </ul>
    );
  }
}

const Post = ({ post }) => (
  <li>
    <Link to={`/posts/${post.id}`}>{post.title}</Link>
  </li>
)

export default Posts;
