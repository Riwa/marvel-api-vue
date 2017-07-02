<template>
  <div>
  
  </div>
</template>

<script>
  import {Store} from '@/Store.js'
  export default {
    name: 'list',
    data(){
      return {
        dataStore: Store.datas,
      }
    },
    created(){
      Store.loadDatas();
      console.log(this.dataStore.characters.data.results)
    }
  }
</script>

<style scoped>

</style>
