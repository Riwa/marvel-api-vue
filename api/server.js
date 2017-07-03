// Express
let express = require('express')
let app = express()
let axios = require('axios')

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

  axios.get(`https://gateway.marvel.com/v1/public/characters?offset=100&ts=1&apikey=dd9da99314fa8e5875a042a8fc03aa01&hash=06dd2f10f2db7f1693516ebe70254ac7`).then((response) => {
    return res.json(response.data.data)
  })

})

app.get('/page/:pageNb', (req, res) => {
  let pageNb = req.params.pageNb;
  let offset = 0;
  if(pageNb == 1) {
    offset = 100;
  } else {
    offset = 100 + (20 * pageNb);
  }
  console.log(pageNb);
  console.log(offset)
  axios.get(`https://gateway.marvel.com/v1/public/characters?offset=${offset}&ts=1&apikey=dd9da99314fa8e5875a042a8fc03aa01&hash=06dd2f10f2db7f1693516ebe70254ac7`).then((response) => {
    return res.json(response.data.data)
  })

})

app.get('/details/:id', (req, res) => {

  axios.get(`https://gateway.marvel.com/v1/public/characters/${req.params.id}?ts=1&apikey=dd9da99314fa8e5875a042a8fc03aa01&hash=06dd2f10f2db7f1693516ebe70254ac7`).then((response) => {
    console.log(response.data.data)
    return res.json(response.data.data)
  })

})

app.get('/details/comics/:id', (req, res) => {

  axios.get(`https://gateway.marvel.com:443/v1/public/characters/${req.params.id}/comics?limit=3&ts=1&apikey=dd9da99314fa8e5875a042a8fc03aa01&hash=06dd2f10f2db7f1693516ebe70254ac7`).then((response) => {
    return res.json(response.data.data)
  })

})

app.listen(3000, function () {
  console.log('Listened on port 3000!')
})