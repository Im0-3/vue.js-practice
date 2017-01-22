<template>
  <div class="editor-view">
    <div>
      <label>内容</label>
      <input v-model="input.text" placeholder="メモのタイトル">
    </div>
    <div>
      <label>日付</label>
      <input type="date" v-model="input.date">
    </div>
    <div>
      <label>タグ</label>
      <input v-model="input.tags" placeholder="空白区切りで指定">
    </div>
    <div>
      <button @click="cancel" v-if="memo">キャンセル</button>
      <button @click="save">保存</button>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      memo: Object
    },
    data () {
      return {
        input: {
          text: '',
          date: '',
          tags: ''
        }
      }
    },
    created () {
      this.setMemo()
    },
    watch: {
      memo: 'setMemo'
    },
    computed: {
      tagsArr () {
        return this.input.tags.trim() !== '' ? this.input.tags.trim().split(/\s+/) : []
      }
    },
    methods: {
      setMemo() {
        if (this.memo) {
          Object.assign(this.input, this.memo, {tags: this.memo.tags.join(' ')})
        }
      },
      save () {
        const data = Object.assign({}, this.input, {tags: this.tagsArr})
        this.$emit('add', data)
      },
      cancel () {
        this.$emit('cancel')
      }
    }
  }
</script>
<style lang="scss">
  .editor-view {
    button {
      width: 200px;
      padding: 5px;
    }
  }
</style>