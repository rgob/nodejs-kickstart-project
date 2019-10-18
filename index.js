const express = require('express')
const nunjucks = require('nunjucks')

var app = express()

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
})

app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'njk')

// Add your middlewares here

// END of middlewares

app.listen(process.env.PORT | 3000)
