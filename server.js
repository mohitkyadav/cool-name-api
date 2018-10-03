// server.js
// where your node app starts

// init project
const express = require('express')
const coolify = require('./services/coolifyService')

const app = express()

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + '/views/index.html')
})

// Simple in-memory store
const names = [
]

app.get("/names", (request, response) => {
  response.send(names)
})

// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.get("/coolify", (request, response) => {
  let cool_names = coolify.alphaNumericName(request.query.name)
  names.unshift(cool_names[0])
  names.unshift(cool_names[1])
  names.unshift(cool_names[2])
  names.unshift(cool_names[3])
  names.unshift(cool_names[4])
  response.setHeader('Content-Type', 'application/json')
  response.json({
    cool_name_alphanum: cool_names[0],
    cool_name_rounded: cool_names[1],
		cool_name_square: cool_names[2],
		cool_name_round_alphanum : cool_names[3],
  })
})

// listen for requests :)
const listener = app.listen(3000, () => {
  console.log(`Your app is listening on port 3000`)
})
