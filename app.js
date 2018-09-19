const express = require('express');
const cors = require('cors');
const knex = require('knex');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 9000
const someday = require('./routes/someday.js');
const yesterday = require('./routes/yesterday.js');

app.use(cors());
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`I am listening on ${port}`)
})