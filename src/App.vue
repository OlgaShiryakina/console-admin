<template>
  <div id="app" class="wrap">
    <sidebar></sidebar>
    <block-header></block-header>
    <main class="main">
      <div class="main__content">
        <router-view></router-view>
      </div>
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
  h1{font-size: 2em;}
  .wrap{
    padding-left: $sidebarWidth;
  }
  .main{
    position: relative;
    padding-top: $headerHeight;
    z-index: 1;
    &__content{
      padding: 10px;
    }
  }
  .syncDate{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .button{
      margin: 0 0 0 10px;
    }
  }
</style>
