import React, { Component } from 'react';

class Post extends Component {
  state = {
    post: {
      comments: [],
      user: {}
    }
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
        <h3>{post.user.email}</h3>
        <p>{post.body}</p>
        <ul>
          {post.comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </ul>
      </div>
    );
  }
}

const Comment = ({ comment }) => (
  <li>{comment.body}</li>
);

export default Post;
