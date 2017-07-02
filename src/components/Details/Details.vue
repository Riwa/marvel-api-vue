<template>
  <div>
    <h1>YO</h1>
    <p>{{ details.data.results[0].name }}</p>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name:'details',
  data() {
    return {
      details: [],
    }
  },
  created(){
    axios.get(`https://gateway.marvel.com:443/v1/public/characters/${this.$route.params.id}?apikey=dd9da99314fa8e5875a042a8fc03aa01`).then((res) => {
      this.details = res.data;
      console.log(this.details)
    })
  }
}
</script>

