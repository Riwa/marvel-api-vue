<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-toolbar class="red" light>
        <v-toolbar-title class="hidden-sm-and-down">
          <v-btn icon light router href="/">
            <v-icon>arrow_back</v-icon>
          </v-btn> Personnages favoris</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-card>
        <v-list>
          <v-list-item v-for="favorite in dataStore.localList" :key="favorite.id">
            <v-list-tile avatar router :href="{ name: 'details', params: { id: favorite.id } }">
              <v-list-tile-content>
                <v-list-tile-title v-html="favorite.name"></v-list-tile-title>
              </v-list-tile-content>
  
              <v-list-tile-avatar>
                <img v-bind:src="favorite.picture">
              </v-list-tile-avatar>
            </v-list-tile>
          </v-list-item>
        </v-list>
      </v-card>
    </v-flex>
    <vue-progress-bar></vue-progress-bar>
  </v-layout>
</template>

<script>
import { Store } from '@/Store.js'
export default {
  name: 'favelist',
  data() {
    return {
      dataStore: Store.datas
    }
  },
  created() {
    Store.showFavorites();
  }
}
</script>

<style scoped>

</style>


