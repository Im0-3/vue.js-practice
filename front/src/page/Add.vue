<template>
  <div>
    <editor-view @add="add"></editor-view>
  </div>
</template>

<script>
  import EditorView from '../components/EditorView'
  import store from '../store'
  export default {
    components: {
      EditorView
    },
    methods: {
      add(data) {
        this.$store.commit('addMemo', data)
        this.$router.push({name: 'items'})
      }
    }
  }
</script>