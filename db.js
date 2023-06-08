const { MongoClient } = require('mongodb');

let dbConnection;

module.exports = {
	connectToDb: (callback) => {
		MongoClient.connect('mongodb://localhost:27017/nameOfDatabase')
			.then((client) => {
				dbConnection = client.db();
				return callback();
			})
			.catch(error => {
				console.log(error)
				return callback(error);
			})
	},
	getDb: () => dbConnection
}

