const express = require('express');
const { connectToDb, getDb } = require('./db')

// init app & middleware //

const app = express();


// db connection //

connectToDb((error) => {
	if (!error) {
		app.listen(5173, () => {
			console.log('app listening on port 5173')
		});
		db = getDb();
	}
})

// routes //

app.get('/route', (req, res) => {
	res.json({ message: 'Welcome to the api' })
})
