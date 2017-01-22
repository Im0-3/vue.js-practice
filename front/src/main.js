import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './routes'
import Vuex from 'vuex'
import _store from './store'

Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter(routes)
const store = new Vuex.Store(_store)

let vm = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store
})

//
//

//
// Vue.component('list-view', {
//  props: {
//    memos: Array
//  },
//  template: `
//    <div class="list-view">
//      <div v-for="memo in memos">
//        <list-item :memo="memo"></list-item>
//      </div>
//    </div>
//  `
// })
//
// const vm = new Vue({
//  el: '#app',
//  data () {
//    return {
//      memos: []
//    }
//  },
//  template: `
//    <div>
//      <editor-view @add="add"></editor-view>
//      <list-view :memos="memos" @remove="remove"></list-view>
//    </div>
//  `,
//  methods: {
//    add (newMemo) {
//      newMemo.id = this.nextId
//      this.memos.push(newMemo)
//    },
//    remove (id) {
//      const index = this.memos.findIndex((memo) => {
//        return memo.id === id
//      })
//      // this.memos から index にある要素を削除する
//      this.memos.splice(index, 1)
//    }
//  },
//  computed: {
//    nextId () {
//      return this.memos.reduce((id, memo) => {
//        return id < memo.id ? memo.id : id
//      }, 0) + 1
//    }
//  }
// })
//
// vm.$mount('#app')
