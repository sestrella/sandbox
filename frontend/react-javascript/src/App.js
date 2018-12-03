import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Client from './Client';
import Post from './components/Post';
import Posts from './components/Posts';

const App = () => {
  const client = new Client('http://localhost:3001');
  return (
    <BrowserRouter>
      <div>
        <Route path="/posts/:id" render={(props) => <Post client={client} {...props} />} />
        <Route exact path="/posts" render={(props) => <Posts client={client} {...props} />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
