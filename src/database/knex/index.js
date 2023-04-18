const config = require('../../../knexfile')
const knex = require('knex', 'environment')

const connection = knex(config.development)

module.exports = connection
