<template>
  <div>
    <h1>{{ details.data.results[0].name }}</h1>
    <p>{{ details.data.results[0].description }}</p>
    <p v-if="details.data.results[0].description.length === 0">Description not available</p>
    <p> Seen in {{details.data.results[0].comics.available}} comics </p>
    <table class="striped">
        <thead>
          <tr>
              <th>Comic's name</th>
              <th>Link</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="comic in comics.data.results" :key="comic.name">
            <td>{{comic.title}}</td>
            <td>{{comic.resourceURI}}</td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name:'details',
  data() {
    return {
      details: [],
      comics: [],
    }
  },
  created(){
    axios.get(`https://gateway.marvel.com:443/v1/public/characters/${this.$route.params.id}?apikey=dd9da99314fa8e5875a042a8fc03aa01`).then((res) => {
      this.details = res.data;
      console.log(this.details)
    });

    axios.get(`https://gateway.marvel.com:443/v1/public/characters/${this.$route.params.id}/comics?limit=3&apikey=dd9da99314fa8e5875a042a8fc03aa01`).then((res) => {
      this.comics = res.data;
    })
  }
}
</script>

