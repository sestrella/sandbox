import React, { Component } from 'react';

class Post extends Component {
  state = {
    post: {}
  }

  componentDidMount() {
    this.props.client.getPost(this.props.match.params.id).then(({ data }) => {
      this.setState({ post: data });
    });
  }

  render() {
    const post = this.state.post;
    return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    );
  }
}

export default Post;
