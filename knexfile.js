// const dotenv = require('dotenv')
// dotenv.load()
// Update with your config settings.

module.exports =  {

  production: {
    client: 'pg',
    connection: {
      host: process.env.DBHOST,
      database: process.env.DBNAME,
      user:     process.env.DBUSER,
      password: process.env.DBPASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
}
