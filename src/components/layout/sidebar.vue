<template>
  <aside class="sidebar">
    <a class="sidebar__open" href="javascript:void(0);"><icon name="bars" scale="2"></icon></a>
    <div class="sidebar__header">
      <a href="javascript:void(0);" class="sidebar__logo">
        <img src="../../assets/logo.png" alt="Vue.js PWA">
      </a>
    </div>
    <div class="sidebar__main">
      <ul>
        <li v-for="item in nav">
          <a>{{ item.name }}</a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Icon from 'vue-awesome/components/Icon'
  import 'vue-awesome/icons/bars'

  export default {
    components: {
      Icon
    },
    data () {
      return {
      }
    },
    computed: {
      ...mapGetters({
        nav: 'getNav'
      })
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
    padding: 10px;
    border-right: 1px solid $color2;
    &__open{
      position: absolute;
      top: 0;
      left: 100%;
      height: $headerHeight;
      width: $navIconWidth;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &__header{
      height: $headerHeight;
      /*background: #555;*/
    }
    &__logo{
      img{
        max-width: 100%;
        max-height: 100%;
        display: block;
      }
    }
  }
</style>
