<template>
  <div>
    <router-link class="btn red back" to="/"> <i class="material-icons">keyboard_backspace</i> Back to the list </router-link>
    <div class="center">
      <h1>{{ details.data.results[0].name }}</h1>
      <img :src="details.data.results[0].thumbnail.path + '.' + details.data.results[0].thumbnail.extension">
      <p>{{ details.data.results[0].description }}</p>
      <p v-if="details.data.results[0].description.length === 0">Description not available</p>
      <p> Seen in {{details.data.results[0].comics.available}} comics </p>
    </div>
    <ul class="collection">
      <li v-for="comic in comics.data.results" :key="comic.name" class="collection-item">{{comic.title}}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'details',
  data() {
    return {
      details: [],
      comics: [],
    }
  },
  created() {
    axios.get(`http://localhost:3000/details/${this.$route.params.id}`).then((res) => {
      this.details = res.data;
    });

    axios.get(`http://localhost:3000/details/comics/${this.$route.params.id}`).then((res) => {
      this.comics = res.data;
      console.log(this.comics)
    })
  }
}
</script>

<style scoped>
  .back {
    margin-top: 30px;
  }
</style>


