var pgPromise = require('pg-promise');
var pgInstance = pgPromise();

var config = {
  host: 'localhost',
  port: 5432,
  database: 'frozenyogurt_db',
  user: 'hnanalshmry'
}

var connection = pgInstance(config);

module.exports = connection;