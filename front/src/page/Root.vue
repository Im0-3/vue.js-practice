<template>
  <div>
    <list-view :memos="sharedState.memos" @remove="remove"></list-view>
  </div>
</template>

<script>
  import ListView from '../components/ListView'
  export default {
    computed: {
      sharedState () {
        return this.$store.state
      }
    },
    methods: {
      remove(id) {
        this.$store.commit('removeMemo', id)
      }
    },
    components: {
      ListView
    }
  }
</script>