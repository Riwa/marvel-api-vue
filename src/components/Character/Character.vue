<template>
  <v-list-item>
    <v-list-tile avatar router :href="{ name: 'details', params: { id: char.id } }">
      <v-list-tile-action>
        <v-icon :class="{faved: this.dataStore.localIds.includes(char.id)}">star</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title v-html="char.name"></v-list-tile-title>
      </v-list-tile-content>
  
      <v-list-tile-avatar>
        <img v-bind:src="char.thumbnail.path + '.' + char.thumbnail.extension">
      </v-list-tile-avatar>
  
    </v-list-tile>
  
  </v-list-item>
</template>

<script>
import { Store } from '@/Store.js'
export default {
  name: 'character',
  props: ['char'],
  data() {
    return {
      dataStore: Store.datas
    }
  },
  created() {
    /**
     * Test if the current character is in fave list
     */
    Store.showFavorites();
    this.dataStore.localList.forEach((elt) => this.dataStore.localIds.push(elt.id))
  }
}
</script>

<style scoped>
.card-image {
  width: 315px;
  height: 250px;
  background-size: cover;
}

h3 {
  font-size: 24px;
}

.faved {
  color: gold;
}
</style>


