const { faker } = require("@faker-js/faker");
const { Article, User, Comment } = require("../models");
const bcrypt = require("bcrypt");

faker.locale = "es";

module.exports = async () => {
  const articles = [];
  const users = [];
  const comments = [];

  for (let i = 0; i < 10; i++) {
    let firstname = faker.name.firstName();
    let lastname = faker.name.lastName();
    let email = faker.internet.exampleEmail(firstname, lastname);
    let password = await bcrypt.hash("1234", 8);
    users.push({
      firstname,
      lastname,
      email,
      password,
    });
  }

  for (let i = 0; i < 10; i++) {
    articles.push({
      title: faker.lorem.sentence(5),
      content: faker.lorem.paragraphs(),
      image: faker.image.abstract(640, 480, true),
      userId: Math.floor(Math.random() * 9) + 1,
    });
  }

  for (let i = 0; i < 20; i++) {
    comments.push({
      content: faker.lorem.paragraphs(1),
      userId: Math.floor(Math.random() * 9) + 1,
      articleId: Math.floor(Math.random() * 9) + 1,
    });
  }

  await User.bulkCreate(users);
  await Article.bulkCreate(articles);
  await Comment.bulkCreate(comments);

  console.log("[Database] Se corrió el seeder de Articles.");
};
