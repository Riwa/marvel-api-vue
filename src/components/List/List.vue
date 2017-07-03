<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-list>
          <character v-for="c in dataStore.characters.data.results" :key="c.id" :char="c"></character>
        </v-list>
      </v-card>
    </v-flex>
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
    Store.loadDatas();
    console.log(this.dataStore.characters.data)
  }
}
</script>

<style scoped>

</style>
