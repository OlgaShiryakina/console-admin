<template>
  <aside class="sidebar">
    <a href="javascript:void(0);" class="sidebar__logo">
      <img src="../../assets/logo.png" alt="Vue.js PWA">
    </a>
    sidebar
  </aside>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../scss/variables';
  .sidebar{
    position: fixed;
    z-index:10;
    top: 0;
    left: 0;
    background: $color1;
    width: $sidebarWidth;
    height: 100vh;
    box-sizing: border-box;
    &__logo{
      height: 100px;
      display: block;
      margin: 0 auto;
    }
  }
</style>
