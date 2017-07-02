<template>
    <div class="col s12 m6">
      <div class="card horizontal">
        <div class="card-image" :style="{ backgroundImage: 'url(' + char.thumbnail.path + '.' + char.thumbnail.extension + ')' }">
        </div>
        <div class="card-stacked">
          <div class="card-content">
            <h3>{{ char.name }}</h3>
          </div>
          <div class="card-action">
            <a href="#">Details</a>
            <a href="#">Add to favorites</a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name:'character',
  props:['char']
}
</script>

<style scoped>

  .card-image {
    width:315px;
    height: 250px;
    background-size: cover;
  }

  h3 {
    font-size: 24px;
  }

</style>


