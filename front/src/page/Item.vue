<template>
  <div class="layout-root">
    <div class="layout-root__search">
      <search></search>
    </div>
    <div class="layout-root_container">
      <gif-view :items="sharedState.favs"></gif-view>
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
    components: {
      Search,
      GifView
    },
    methods: {
      keywords: {
        change (value) {
          this.$store.commit('changeKeywords', value)
        }
      },
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