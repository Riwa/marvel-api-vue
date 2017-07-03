<template>
  <div id="app">
    <header>
      <nav>
        <div class="nav-wrapper red">
          <h1><router-link to="/">Marvel's API app</router-link></h1>
        </div>
      </nav>
    </header>
    <div class="container">
      <router-view></router-view>
    </div>
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  h1 {
    margin: 0;
    font-size: 30px;
    line-height: 64px
  }

  header {
    text-align: center;
  }
</style>
