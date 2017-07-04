// Express
let express = require('express')
let app = express()
let api = require('./Api.js')

let cors = require('cors');
let bodyParser = require('body-parser');
let logger = require('morgan');
let helmet = require('helmet');

app.use(logger('dev'));
app.use(require('cookie-parser')());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
logger('tiny')
app.use(helmet());

/**
 * Throw errors in JSON format
 */
app.use(function (error, request, response, next) {
  response.status(error.status || 500);
  response.json({ error: error.message });
});

/**
 * Load first batch of datas
 */
app.get('/', (req, res) => {
  api.getList().then((response) => {
    res.json(response);
  })

})

app.get('/page/:pageNb', (req, res) => {
  api.getPage(req.params.pageNb).then((response) => {
    res.json(response)
  })
})

app.get('/details/:id', (req, res) => {
  if (!req.params.id) throw 'ID is required !'
  api.getCharacter(req.params.id).then((response) => {
    res.json(response);
  })

})

app.get('/details/comics/:id', (req, res) => {
  if (!req.params.id) throw 'ID is required !'
 api.getComics(req.params.id).then((response) => {
   res.json(response);
 })

})

// Run server on port 3000
app.listen(3000, function () {
  console.log('Listened on port 3000!')
})