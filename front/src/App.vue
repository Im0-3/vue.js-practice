<template>
  <div id="app">
    <nav-link></nav-link>
    <router-view></router-view>
  </div>
</template>

<script>
import NavLink from './components/NavLink'

export default {
  name: 'app',
  components: {
    'nav-link': NavLink
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
</style>