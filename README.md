# Marvel API
A small app using Marvel's API, using [Vue.js](http://vuejs.org/) with [Vuetify](https://vuetifyjs.com/), [Node.js](https://nodejs.org/en/) and [Express JS 5](http://expressjs.com/fr/)

## Features
- Display characters from the 100th
- Working pagination
- 20 characters per page
- Loader
- Add up to 5 characters in a favorites list

## How to run the app

### Clone
    git clone git@github.com:Riwa/marvel-api-vue.git 
    cd marvel-api-vue

### Install Vue dependencies
From root file (marvel-vue-api)

    npm i

### Install Node dependencies
    cd api
    npm i

### Launch node server
It's recomanded to use Nodemon to launch the Node server.
See [https://nodemon.io/](https://nodemon.io/)

    cd api
    nodemon server.js
The server will listen at port 3000

### Launch Vue app
From root file (marvel-api-vue)

    npm run dev

### Clear localStorage on http://localhost
Add to favorites function use localStorage for data persistence. Pleas clear localStorage on http://localhost domain and refresh before using this function.


### Display app in browser
[http://localhost:8080](http://localhost:8080)

## Test app (Node side / API)
    cd api
    mocha Api.spec.js

Note : the test can require a timeout to works fine
    mocha Api.spec.js --timeout (time in ms)