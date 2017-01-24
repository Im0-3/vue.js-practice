<template>
  <div id="app">
    <global-header></global-header>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import GlobalHeader from './components/GlobalHeader'

export default {
  name: 'app',
  components: {
    GlobalHeader
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}

  .container {
    box-sizing: border-box;
    width: 100%;
    padding: 0 20px;
  }
</style>