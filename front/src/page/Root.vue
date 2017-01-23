<template>
  <div class="l-root">
    <div class="search">
      <input  @change="changeKeywords($event.target.value)" type="text">
      <button @click="search">search</button>
    </div>
    <div class="gif-view">
      <div v-for="item in sharedState.gifs" class="gif-item">
        <div class="git-item-id">
          id: {{item.id}}
        </div>
        <div class="git-item-url">
          url: {{item.url}}
        </div>
        <div class="gif-item-image">
          <img :src="item.images.fixed_height.url" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderNav from '../components/HeaderNav'
  export default {
    computed: {
      sharedState() {
        return this.$store.state
      }
    },
    components: {
      HeaderNav
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