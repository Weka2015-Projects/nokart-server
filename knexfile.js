// const dotenv = require('dotenv')
// dotenv.load()
// Update with your config settings.

module.exports =  {

  production: {
    client: 'pg',
    connection: process.env.DBHOST,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
}
