const koa = require('koa')
const body = require('koa-bodyparser')
const knex = require('koa-knex')
const Router = require('koa-router')
const cors = require('koa-cors')
const app = koa()
const storeRouter = new Router()
// const dotenv = require('dotenv')
// dotenv.load()

app.use(body())

app.use(knex({
  client: 'pg',
  connection: {
    host     : process.env.DBHOST,
    port     : '5432',
    database : process.env.DBNAME
  },
  searchPath: 'public'
}))

storeRouter.get('/products', function *() {
  const res = yield this.knex.raw('select * from products')
  this.body = res.rows
  this.status = 200
})

const options = {
    origin: '*',
    methods: ['GET', 'POST', 'PATCH']
}

app.use(cors(options))

app.use(storeRouter.middleware())


module.exports = app
