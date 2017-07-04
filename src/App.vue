<template>
  <v-app>
    <v-toolbar class="red" light>
      <v-toolbar-title><h1><strong>Marvel</strong></h1></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn router :to="{ name: 'favelist'}" icon light>
        <v-icon>favorite</v-icon>
      </v-btn>
    </v-toolbar>
    <main>
      <v-container fluid>
        <transition name="fade">
          <router-view></router-view>
        </transition>
      </v-container>
    </main>
    <v-footer class="red"></v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>
h1 {
  margin: 0;
  font-size: 30px;
  line-height: 64px;
  text-transform: uppercase;
  color: rgb(255,255,255);
  font-weight: bold;
}
</style>
