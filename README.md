# Marvel API
A small app using Marvel's API, using [http://vuejs.org/](Vue.js) with [https://vuetifyjs.com/](Vuetify), [https://nodejs.org/en/](Node.js) and [http://expressjs.com/fr/](ExpressJS)

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