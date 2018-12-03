const faker = require('faker');

module.exports = function() {
  return {
    comments: [
      { id: 1, body: faker.random.words(), postId: 1, userId: 1 },
      { id: 2, body: faker.random.words(), postId: 1, userId: 2 },
      { id: 3, body: faker.random.words(), postId: 2, userId: 1 }
    ],
    posts: [
      { id: 1, title: faker.name.title(), body: faker.random.words(), userId: 1 },
      { id: 2, title: faker.name.title(), body: faker.random.words(), userId: 2 }
    ],
    users: [
      { id: 1, email: faker.internet.email() },
      { id: 2, email: faker.internet.email() }
    ]
  };
}
