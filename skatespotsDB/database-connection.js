const knex = require("knex");
const environment = ('development');
const config = require("../knexfile");
const database = knex(config[environment]);

module.exports = database


//process.env.NODE_ENV || 