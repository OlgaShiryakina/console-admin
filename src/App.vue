<template>
  <div id="app" class="wrap">
    <sidebar></sidebar>
    <main>
      <block-header></block-header>
      <img src="./assets/logo.png" alt="Vue.js PWA">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
  import blockHeader from '@/components/layout/header'
  import sidebar from '@/components/layout/sidebar'

  export default {
    components: {
      blockHeader,
      sidebar
    },
    data: function () {
      return {
      }
    }
  }
</script>

<style lang="scss">
  @import '~bulma';
  @import 'scss/variables';
  .wrap{
    padding-left: $sidebarWidth;
  }
</style>
