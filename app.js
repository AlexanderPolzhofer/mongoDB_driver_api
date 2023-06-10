const express = require('express');
const { connectToDb, getDb } = require('./db')

// init app & middleware //

const app = express();


// db connection //
let db;

connectToDb((error) => {
	if (!error) {
		app.listen(5173, () => {
			console.log('app listening on port 5173')
		});
		db = getDb();
	}
})

// routes //

app.get('/routeNameEqualsCollectionName', (req, res) => {
	let collectionArray = [];

	db.collection('/dbCollectionName')
		.find()
		.sort({ parameter: 'value' })
		.forEach(val => collectionArray.push(val))
		.then(() => {
			res.status(200).json(collectionArray)
		})
		.catch(() => {
			res.status(500).json({ error: 'Could not fetch the documents' })
		})
})
