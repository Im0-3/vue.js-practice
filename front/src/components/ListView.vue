<template>
  <div class="list-view">
    <div v-for="memo in memos">
      <list-item
        :memo="memo"
        @remove="remove"
        @select="select">
      </list-item>
    </div>
  </div>
</template>

<script>
  import ListItem from './ListItem.vue'

  export default {
    props: {
      memos: Array
    },
    components: {
      'list-item': ListItem
    },
    computed: {
      filteredMemos() {
        let memo = this.memos.concat()
      }
    },
    methods: {
      remove (id) {
        this.$emit('remove', id)
      },
      select (id) {
        this.$emit('select', id)
      }
    }
  }
</script>