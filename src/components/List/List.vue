<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-toolbar class="red" light>
        <v-toolbar-title class="hidden-sm-and-down"><i class="material-icons">view_list</i> Liste des personages</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-card>
      <v-list>
          <character v-for="character in dataStore.characters.results" :key="character.id" :char="character"></character>
      </v-list>
      </v-card>
    </v-flex>
    <vue-progress-bar></vue-progress-bar>
  </v-layout>
</template>

<script>
import { Store } from '@/Store.js'
import Character from '@/components/Character/Character'

export default {

  name: 'list',
  components: {
    character: Character,
  },

  data() {
    return {
      dataStore: Store.datas, // Store Management Pattern 
    }
  },

  created() {
    this.$Progress.start()
    Store.loadDatas().then((res) =>{
      this.$Progress.finish()
    })
  }
  
}
</script>
