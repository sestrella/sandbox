import axios from 'axios';

class Client  {
  constructor(baseURL) {
    this.axios = axios.create({ baseURL });
  }

  getPosts() {
    return this.axios.get('posts');
  }

  getPost(id) {
    return this.axios.get(`posts/${id}`);
  }
}

export default Client;
