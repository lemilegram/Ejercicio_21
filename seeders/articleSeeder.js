const { faker } = require("@faker-js/faker");
const { Article } = require("../models");
const { User } = require("../models");

faker.locale = "es";

module.exports = async () => {
  const articles = [];
  const users = [];

  for (let i = 0; i < 10; i++) {
    let firstname = faker.name.firstName();
    let lastname = faker.name.lastName();
    users.push({
      firstname,
      lastname,
    });
  }

  for (let i = 0; i < 10; i++) {
    articles.push({
      title: faker.lorem.sentence(5),
      content: faker.lorem.paragraphs(),
      authorId: Math.floor(Math.random() * 9) + 1,
    });
  }

  await Article.bulkCreate(articles);
  await User.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de Articles.");
};
