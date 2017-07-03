<template>
  <!--<div>
            <router-link class="btn red back" to="/"> <i class="material-icons">keyboard_backspace</i> Back to the list </router-link>
            <div class="center">
              <h1>{{ details.data.results[0].name }}</h1>
              <img :src="details.data.results[0].thumbnail.path + '.' + details.data.results[0].thumbnail.extension">
              <p>{{ details.data.results[0].description }}</p>
              <p v-if="details.data.results[0].description.length === 0">Description not available</p>
              <p> Seen in {{details.data.results[0].comics.available}} comics </p>
            </div>
            <ul class="collection">
              <li v-for="comic in comics.data.results" :key="comic.name" class="collection-item">{{comic.title}}</li>
            </ul>
          </div>-->
  
  <v-layout row transition="v-slide-x-transition">
    <v-flex xs12 sm6 offset-sm3>
      <v-toolbar class="red d-toolbar" light>
        <v-btn icon light router href="/">
          <v-icon>arrow_back</v-icon>
        </v-btn>
        <v-toolbar-title class="hidden-sm-and-down">{{ details.results[0].name }}'s details</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon light>
          <v-icon>favorite</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card horizontal>
        <v-card-row :img="details.results[0].thumbnail.path + '.' + details.results[0].thumbnail.extension" height="300px"></v-card-row>
        <v-card-column>
          <v-card-row class="red white--text">
            <v-card-text>
              <strong>{{ details.results[0].name }}</strong>
              <div>Seen in {{details.results[0].comics.available}} comics</div>
              <div>
                <p>{{ details.results[0].description }}</p>
              </div>
            </v-card-text>
          </v-card-row>
          <v-card-row actions class="red accent-4">
            <v-btn flat class="white--text">
              <v-icon left light>details</v-icon>More
            </v-btn>
          </v-card-row>
        </v-card-column>
      </v-card>
  
      <v-card id="comics-list">
        <v-list>
          <v-list-item v-for="comic in comics.results" :key="comic.name">
            <v-list-tile avatar ripple>
              <v-list-tile-content>
                <v-list-tile-title>{{comic.title}}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-item>
        </v-list>
      </v-card>
    </v-flex>
      <vue-progress-bar></vue-progress-bar>
  </v-layout>
</template>

<script>
import axios from 'axios';
export default {
  name: 'details',
  data() {
    return {
      details: [],
      comics: [],
    }
  },
  created() {

        this.$Progress.start()

    axios.get(`http://localhost:3000/details/${this.$route.params.id}`).then((res) => {
      this.details = res.data;
      console.log(this.details)
      this.$Progress.finish()
    });

    axios.get(`http://localhost:3000/details/comics/${this.$route.params.id}`).then((res) => {
      this.comics = res.data;
      console.log(this.comics)
    })
  }
}
</script>

<style scoped>
.back {
  margin-top: 30px;
}

#comics-list {
  margin-top: 30px;
}

.d-toolbar {
  margin-bottom: 15px;
}
</style>


