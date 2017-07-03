<template>
  <v-app>
  <v-toolbar class="red">
    <v-toolbar-title class="white--text t-title"><strong>Marvel</strong>'s API</v-toolbar-title>
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
    line-height: 64px
  }

  .t-title {
    text-transform: uppercase;
    text-align: center;
  }
</style>
