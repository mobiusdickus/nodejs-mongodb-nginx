const express = require('express');
const mongoose = require('mongoose');

const app = express();
const DB_URI = process.env.MONGO_URI;

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String
});
const UserModel = mongoose.model('User', userSchema);

mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
  })
  .then(() => {
    const user = new UserModel({
      name: 'Night Man',
      email: 'nightman@dayman.com',
      phone: '000-000-0000'
    });
    return user.save();
  })
  .then(() => {
    console.log('User created!');
  })
  .catch(err => {
    console.error(err);
    mongoose.disconnect();
  });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to MongoDB');
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/db-check', async (req, res) => {
  try {
    const documents = await UserModel.find();
    if (!documents) {
      return res.status(404).send('Documents not found');
    }
    return res.send(documents);
  } catch (err) {
    console.error(err);
    return res.status(500).send('Server Error');
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000...');
});
