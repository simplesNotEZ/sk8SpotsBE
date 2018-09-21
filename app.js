const express = require('express');
const cors = require('cors');
const knex = require('knex');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const port = 9000;
const someday = require('./routes/someday.js');
const yesterday = require('./routes/yesterday.js');

app.use(cors());
app.use(bodyParser.json());

app.use('/someday', someday);
app.use('/yesterday', yesterday);

app.listen(port, () => {
    console.log(`I am listening on ${port}`)
})

//process.env.PORT ||