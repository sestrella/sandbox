import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Posts from './components/Posts';

const App = () => {
  const client = new Client('http://localhost:3001');
  return (
    <Router>
      <div>
        <Route path="/posts" render={() => <Posts client={client} />} />
      </div>
    </Router>
  );
}

class Client  {
  constructor(baseURL) {
    this.axios = axios.create({ baseURL });
  }

  getPosts() {
    return this.axios.get('posts');
  }
}

export default App;
