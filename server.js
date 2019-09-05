const express = require('express');
const path = require('path');

require('dotenv').config();


const { SERVER_PORT } = process.env;

const app = express();

app.use(express.static(path.join(__dirname, './build')))

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname + './build/index.html'));
});

app.listen(SERVER_PORT, () => console.log(`Something dark lurks on port ${SERVER_PORT}...`))