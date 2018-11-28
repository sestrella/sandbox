const faker = require('faker');

module.exports = function() {
  return {
    comments: [
      { id: 1, body: faker.random.words(), postId: 1 },
      { id: 2, body: faker.random.words(), postId: 2 }
    ],
    posts: [
      { id: 1, title: faker.name.title() },
      { id: 2, title: faker.name.title() }
    ]
  };
}
