<template>
  <v-layout row transition="v-slide-x-transition">
    <v-flex xs12 sm6 offset-sm3 v-if="details.results">
      <v-toolbar class="red d-toolbar" light>
        <v-btn icon light router href="/">
          <v-icon>arrow_back</v-icon>
        </v-btn>
        <v-toolbar-title class="hidden-sm-and-down">{{ details.results[0].name }}'s details</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn class="favorite-button" @click.native="addToFavorites(details.results[0])" icon light>
          <v-icon v-if="this.dataStore.localIds.includes(this.details.results[0].id) == true">favorite</v-icon>
          <v-icon v-else>favorite_border</v-icon>
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
            <a class="link" :href="details.results[0].urls[0].url" target="_blank">
              <v-btn flat class="white--text">
                <v-icon left light>details</v-icon>More
              </v-btn>
            </a>
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
    <v-progress-circular :size="150" id="progress-circ" v-else indeterminate class="primary--text"></v-progress-circular>
  
    <vue-progress-bar></vue-progress-bar>
  
    <v-snackbar :timeout="dialog.timeout" :top="dialog.y === 'top'" :bottom="dialog.y === 'bottom'" :right="dialog.x === 'right'" :left="dialog.x === 'left'" :multi-line="dialog.mode === 'multi-line'" :vertical="dialog.mode === 'vertical'" v-model="dialog.snackbar">
      {{ dialog.text }}
      <v-btn flat class="pink--text" @click.native="dialog.snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-layout>
</template>

<script>
import axios from 'axios';
import { Store } from '@/Store.js'

export default {
  name: 'details',
  data() {
    return {
      details: {},
      comics: [],
      dataStore: Store.datas,
      dialog: {
        snackbar: false,
        y: 'top',
        x: null,
        mode: '',
        timeout: 6000,
        text: 'Il y a déjà 5 favoris dans votre liste. Supprimez-en avant d\'en ajouter de nouveaux'
      }
    }
  },
  created() {

    this.$Progress.start()

    /**
     * Load character's details
     * @param {number} this.$route.params.id The character's id fetched with the router link in List component
     */
    Store.getCharacter(this.$route.params.id).then((res) => {
      this.details = res;
    });

    Store.showFavorites();
    this.dataStore.localList.forEach((elt) => this.dataStore.localIds.push(elt.id))
    this.$Progress.finish()


    /**
     * Load character's comics
     * @param {number} this.$route.params.id The character's id fetched with the router link in List component
     */
    Store.getComic(this.$route.params.id).then((res) => {
      this.comics = res;
    })
  },

  methods: {
    addToFavorites(item) {
      if (this.dataStore.localList.length <= 4) {
        let button = document.querySelector(".favorite-button span i");
        button.innerHTML = 'favorite'
        Store.addToFavorites(item);
      } else {
        this.dialog.snackbar = true;
      }
    }
  }
}
</script>

<style scoped>
#progress-circ {
  margin: auto;
}

.back {
  margin-top: 30px;
}

#comics-list {
  margin-top: 30px;
}

.d-toolbar {
  margin-bottom: 15px;
}

a.link {
  text-decoration: none;
}
</style>


