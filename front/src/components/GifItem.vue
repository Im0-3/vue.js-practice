<template>
  <div class="gif-item" @click="">
    <div class="gif-item__image">
      <img :src="item.images.fixed_height.url" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      item: Object
    }
  }
</script>

<style lang="scss">
  .gif-item {
    flex: 1 0 100%;
    &__image {
      > img {
        width: 100%;
      }
   }
  }
</style>