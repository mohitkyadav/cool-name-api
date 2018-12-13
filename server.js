// server.js
// where your node app starts

// init project
const express = require('express')
const coolify = require('./services/coolifyService')
const uncoolify = require('./services/uncoolifyService')

const app = express()

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
	response.sendFile(__dirname + '/views/index.html')
})

// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.get("/coolify", (request, response) => {
	let cool_names = coolify.alphaNumericName(request.query.name)
	response.setHeader('Content-Type', 'application/json')
	response.json({
		cool_names_symbolic: cool_names[0],
		cool_name_alphanum: cool_names[1],
		cool_name_rounded: cool_names[2],
		cool_name_square: cool_names[3],
		cool_name_round_alphanum: cool_names[4],
		cool_name_mirrored: cool_names[5],
		cool_name_xabovebelow: cool_names[6],
		cool_name_emoji: cool_names[7],
		cool_name_upsidedown: cool_names[8],
		cool_name_wavy: cool_names[9],
		cool_name_curr: cool_names[10],
		cool_name_fairy: cool_names[11],
		cool_name_dot: cool_names[12],
	})
})

app.get("/uncoolify", (request, response) => {
	let uncoolified_name = uncoolify.alphaNumericName(request.query.name)
	response.setHeader('Content-Type', 'application/json')
	response.json({
		uncool_name: uncoolified_name
	})
})

// listen for requests :)
const listener = app.listen(3000, () => {
	console.log(`Your app is listening on port 3000`)
})
