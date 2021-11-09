const { MongoClient } = require('mongodb');

const MONGO_DB_URL = 'mongodb://localhost:27017/';
const DBNAME = 'BD_desafio';

const connection = () =>
  MongoClient.connect(MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then((conn) => conn.db(DBNAME))
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });

module.exports = connection;