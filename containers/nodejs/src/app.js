const express = require('express');
const mongoose = require('mongoose');
const UsersModel = require('./models/usersModel.js');

const app = express();
const DB_URI = process.env.MONGO_URI;
let db;

async function init() {
  try {
    // Connect to the MongoDB database.
    const client = await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    db = client.connection.db;

    console.log(`Connected to MongoDB: ${db.databaseName}`);
  } catch (err) {
    console.error(err);
  }
}

init();

app.get('/', async (req, res) => {
  try {
    const usersDocs = await UsersModel.find();
    if (!usersDocs) {
      return res.status(404).send('Documents not found');
    }
    console.log(usersDocs);

    res.setHeader('Content-Type', 'text/html');

    res.write("<h1>Welcome to Node.js, MongoDB, and NGINX with Docker!</h1>");
    res.write("<h3>Default user data pulled from the database --></h3>");
    usersDocs.forEach((user) => {
      res.write(`<h3>Username: ${user.username}<br>Email: ${user.email}</h3>`);
    });
    return res.end();
  } catch (err) {
    console.error(err);
    return res.status(500).send('Server Error');
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000...');
});
