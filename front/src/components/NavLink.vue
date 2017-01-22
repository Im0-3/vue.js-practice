<template>
  <nav class="nav-link">
    <ul>
      <li>
        <router-link :to="{name: 'root'}">最新</router-link>
      </li>
      <li>
        <router-link :to="{name: 'items'}">一覧</router-link>
      </li>
      <li>
        <router-link :to="{name: 'add'}">追加</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
  }
</script>


<style lang="scss">
.nav-link {
  > ul {
    background: #000;
    width: 100%;
    display: flex;
    > li {
        list-style-type: none;
      > a {
          padding: 10px 20px;
          display: block;
          background: #999;
          color: #fff;
      }
    }
  }
}
</style>