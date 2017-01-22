<template>
  <div class="list-item" @click="select(memo.id)">
    <div>
      <span class="list-item-label">ID</span>
      <span class="list-item-value">{{memo.id}}</span>
    </div>
    <div>
      <span class="list-item-label">DATE</span>
      <span class="list-item-value">{{memo.date}}</span>
    </div>
    <div>
      <span class="list-item-label">TAG</span>
      <span class="list-item-value">
        <span v-for="tag in memo.tags">{{tag}}</span>
      </span>
    </div>
    <div>
      <button @click.stop="remove(memo.id)">削除</button>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      memo: Object
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

<style lang="scss">
.list-item {
  font-weight: bold;
  font-size: 14px;
  line-height: 40px;
  button {
    width: 200px;
    padding: 5px;
  }
}
.list-item-label {
  display: inline-block;
  width: 40px;
  text-align: left;
}
.list-item-value {
  display: inline-block;
  &:before {
     display: inline-block;
     content: ':';
     padding: 0 10px;
  }
}
</style>