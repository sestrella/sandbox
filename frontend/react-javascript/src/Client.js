import axios from 'axios';

class Client  {
  constructor(baseURL) {
    this.axios = axios.create({ baseURL });
  }

  getPosts() {
    return this.axios.get('posts?_expand=user');
  }

  getPost(id) {
    return this.axios.get(`posts/${id}?_embed=comments&_expand=user`);
  }
}

export default Client;
