if (process.env.NODE_ENV === 'development') {
  var keys = require('../_keys');
}

var mongoDBS = {
	test: 'mongodb://localhost/tree-test',
	development: 'mongodb://localhost/tree',
	production: process.env.MONGOLAB_URI
};

var config = {
  TOKEN_SECRET: process.env.TOKEN_SECRET || 'my-precious',
  MONGO_URI: mongoDBS,
  SALT_WORK_FACTOR: 10,
  GITHUB_SECRET: process.env.GITHUB_SECRET || keys.GITHUB_SECRET,
};

module.exports = config;
