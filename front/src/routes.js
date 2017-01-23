import Root from './page/Root.vue'

export default {
  mode: 'history',
  routes: [
    {
      path: '/', component: Root, name: 'root'
    }
  ]
}