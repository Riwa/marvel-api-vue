<template>
  <v-list-item>
    <v-list-tile avatar router :href="{ name: 'details', params: { id: char.id } }">
      <v-list-tile-action>
        <v-icon>star</v-icon>
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
export default {
  name: 'character',
  props: ['char'],
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
</style>


