<template>
  <div class="l-wrapper">
    <list-view class="l-list" :memos="sharedState.memos" @remove="remove" @select="select"></list-view>
    <router-view class="l-editor" :memo="selectedMemo" @add="update" @cancel="cancel"></router-view>
  </div>
</template>

<script>
  import ListView from '../components/ListView'
  export default {
    computed: {
      sharedState () {
        return this.$store.state
      },
      selectedMemo () {
        if (typeof this.$route.params.id !== 'undefined') { // id がある場合は `/items/:id` へのアクセス
          const id = parseInt(this.$route.params.id, 10)
          const memo = this.sharedState.memos.find((memo) => {
                    return memo.id === id
                  })
          return memo // id が一致するメモのデータを返す
        }
      }
    },
    methods: {
      remove(id) {
        this.$store.commit('removeMemo', id)
      },
      select(id) {
        this.$router.push({name: 'edit', params: {id}})
      },
      update(data) {
        this.$store.commit('updateMemo', data)
        this.$router.push({name: 'items'})
      },
      cancel() {
        this.$router.push({name: 'items'})
      }
    },
    components: {
      ListView
    }
  }
</script>

<style>
  .l-wrapper {
    width: 100%;
    display: flex;
  }
  .l-list {
    flex: 1 0 50%
  }
  .l-editor {
    flex: 1 0 50%
  }
</style>