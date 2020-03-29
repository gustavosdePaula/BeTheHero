const knex = require('knex')
const configuration = require('../../knexfile')

let config = configuration.development

if(process.env.NODE_ENV == "production") {
    config = configuration.production
} else if (process.env.NODE_ENV == "test") {
    config = configuration.test
}


const connection = knex(config)


process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

module.exports = connection