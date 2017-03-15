const koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const json = require('koa-json')
const server = require('koa-static')
const routes = require('./routes/router')
const app = new koa()
const router = new Router()

app.use(json())

app.use(bodyParser())

routes(router)

app.use(router.routes())

app.use(server('./public'))

app.listen(3000)
console.log('server start 3000')