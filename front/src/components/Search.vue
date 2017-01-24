<template>
  <div class="search">
    <form @submit.prevent="search">
      <input v-model="keywords" @change="changeKeywords($event.target.value)" type="text" placeholder="search...">
      <button type="submit">Search</button>
    </form>
  </div>
</template>

<script>
  export default {
    props: {
      keywords: String
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

<style lang="scss">
  .search {
    > form {
      display: flex;
      > input {
          width: 100%;
          padding: 5px;
          letter-spacing: .05em;
        }
      > button {
          color: #fff;
          border: none;
          background: #35cda9;
          padding: 5px 20px;
          letter-spacing: .1em;
      }
    }
  }
</style>