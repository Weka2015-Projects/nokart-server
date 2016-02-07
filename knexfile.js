const dotenv = require('dotenv')
dotenv.load()
// Update with your config settings.

module.exports =  {

  development: {
    client: 'postgresql',
    connection: {
      database: process.env.DBNAME,
      user:     process.env.DBUSER,
      password: process.env.DBPASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  }
}
