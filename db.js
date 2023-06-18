const { MongoClient } = require('mongodb');

let dbConnection;


module.exports = {
	connectToDb: (callback) => {
		MongoClient.connect('mongodb://127.0.0.1:27017/ecommerceDB')
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

