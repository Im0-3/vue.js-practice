<template>
  <div class="layout-root">
    <div class="layout-root__search">
      <search :keywords="sharedState.keywords"></search>
    </div>
    <div class="layout-root_container">
      <gif-view :items="sharedState.gifs"></gif-view>
    </div>
  </div>
</template>
<script>
  import Search from '../components/Search'
  import GifView from '../components/GifView'

  export default {
    computed: {
      sharedState() {
        return this.$store.state
      }
    },
    created () {
      this.$store.dispatch('search', this.sharedState.keywords)
    },
    components: {
      Search,
      GifView
    },
    methods: {
      changeKeywords (value) {
        this.$store.commit('changeKeywords', value)
      },
      search () {
        this.$store.dispatch('search', this.sharedState.keywords)
      }
    }
  }
</script>

<style>
  .layout-root {

  }
  .layout-root__search {
    margin-top: 20px;
  }
  .layout-root_container {
    margin-top: 20px;
  }
</style>