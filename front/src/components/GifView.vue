<template>
  <div class="gif-view">
    <GifItem v-for="item in items" :item="item"></GifItem>
  </div>
</template>

<script>
  import GifItem from './GifItem.vue'
  export default {
    props: {
      items: Array
    },
    components: {
      GifItem
    }
  }
</script>

<style lang="scss">
  .gif-view {
    display: flex;
    flex-wrap: wrap;
  }
</style>