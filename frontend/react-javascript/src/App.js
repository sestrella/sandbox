import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  render() {
    const client = new Client('http://localhost:3001');
    return (
      <div className="App">
        <Posts client={client} />
      </div>
    );
  }
}

class Client  {
  constructor(baseURL) {
    this.axios = axios.create({ baseURL });
  }

  getPosts() {
    return this.axios.get('posts?_embed=comments');
  }
}

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
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
  <li>{post.title} - ({post.comments.length}) comments</li>
)

export default App;
