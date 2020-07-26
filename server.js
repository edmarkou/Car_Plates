const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

const db = require('./back-end/database.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));


db.connectDb().then(async () => {
  app.listen(port, () => console.log(`Running ${port}!`));
});

app.use('/api/car-plates', require('./back-end/routes/car-plates.js'));
// Catch all other routes and return the index file
app.get('*', (req, res) =>  res.sendFile(path.join(__dirname, 'public/index.html')));