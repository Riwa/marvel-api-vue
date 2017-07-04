// Express
let express = require('express')
let app = express()
let axios = require('axios')
let config = require('./config.js') // Require configuration file (with base URL + API Key + hash)

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

app.get('/', (req, res) => {

  axios.get(`${config.base}?offset=100&ts=1&apikey=${config.apikey}&hash=${config.hash}`).then((response) => {
    return res.json(response.data.data)
  })

})

app.get('/page/:pageNb', (req, res) => {
  let pageNb = req.params.pageNb;
  let offset = 0;
  // Compute the offset value to paginate all characters (20 items per page)
  if(pageNb == 1) {
    offset = 100;
  } else {
    offset = 100 + (20 * pageNb);
  }
  console.log(pageNb);
  console.log(offset)
  axios.get(`${config.base}?offset=${offset}&ts=1&apikey=${config.apikey}&hash=${config.hash}`).then((response) => {
    return res.json(response.data.data)
  })

})

app.get('/details/:id', (req, res) => {
  // API call to get details of the clicked character
  axios.get(`${config.base}/${req.params.id}?ts=1&apikey=${config.apikey}&hash=${config.hash}`).then((response) => {
    console.log(response.data.data)
    return res.json(response.data.data)
  })

})

app.get('/details/comics/:id', (req, res) => {
  // API call to get comics where the clicked character appears
  axios.get(`${config.base}/${req.params.id}/comics?limit=3&ts=1&apikey=${config.apikey}&hash=${config.hash}`).then((response) => {
    return res.json(response.data.data)
  })

})

// Run server on port 3000
app.listen(3000, function () {
  console.log('Listened on port 3000!')
})