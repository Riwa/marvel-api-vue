<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-toolbar class="red" light>
        <v-toolbar-title class="hidden-sm-and-down">Main list</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-card>
        <v-list>
          <character v-for="c in dataStore.characters.results" :key="c.id" :char="c"></character>
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
      dataStore: Store.datas,
    }
  },
  created() {
    this.$Progress.start()
    Store.loadDatas()
    console.log(this.dataStore.characters.data)
  },
  updated() {
    this.$Progress.finish()
  }
}
</script>

<style scoped>

</style>
