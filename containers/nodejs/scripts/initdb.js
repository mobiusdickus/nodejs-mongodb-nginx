const mongoose = require('mongoose');
const UsersModel = require('../src/models/usersModel.js');

const DB_URI = process.env.MONGO_URI;

async function initDB() {
  try {

    const conn = await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const db = conn.connection.db;
    console.log('Connected to MongoDB: ${db.databaseName}');
    const usersCollection = db.collection('users');
    const count = await usersCollection.countDocuments();

    if (count === 0) {
        const defaultUser = new UsersModel({
            username: 'admin',
            email: 'admin@foobar.com',
            password: 'admin',
        });
        await usersCollection.insertOne(defaultUser);
        console.log('Created default user.');
    }
    await mongoose.disconnect();
    console.log('Default user already exists.');
  } catch (err) {
    await mongoose.disconnect();
    console.error(err);
  }
}

initDB();
