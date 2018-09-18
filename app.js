const express = require('express');
const cors = require('cors');
const knex = require('knex');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

app.use(cors());
app.use(bodyParser.json());