<template>
  <header class="header">
    <div class="header__search">
      <form class="header__search__form">
        <input type="search" class="input">
        <icon name="search" scale="1.3"></icon>
      </form>
    </div>
    <div class="header__user">
      <div v-if="user.photo" class="header__user__photo"><img :src="user.photo"></div>
      <icon v-if="!user.photo" name="user-circle" scale="2"></icon>
      <div class="header__user__name">{{ user.name }}</div>
      <ul class="header__user__drop">
        <li><a href="javascript:void(0);">Настройки</a></li>
        <li><a href="javascript:void(0);">Выход</a></li>
      </ul>
    </div>
  </header>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Icon from 'vue-awesome/components/Icon'
  import 'vue-awesome/icons/user-circle'
  import 'vue-awesome/icons/search'

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
        user: 'getUser'
      })
    }
  }
</script>

<style lang="scss">
  @import '../../scss/variables';
  .header{
    height: $headerHeight;
    background: $color1;
    padding: 0 10px 0 0;
    display: flex;
    align-items: center;
    border-bottom: 1px solid $color2;
    &:before{
      content: '';
      width: $navIconWidth;
      height: $headerHeight;
      float: left;
    }
    &__search{
      flex: 1 1 auto;
      padding: 0 20px;
      &__form{
        position: relative;
      }
      .fa-icon{
        position: absolute;
        top: 0;
        right: 8px;
        height: 100%;
      }
      .input{
        padding-right: 30px;
      }
    }
    &__user{
      position: relative;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover .header__user__drop{
        display: block;
      }
      &__photo{
        width: 40px;
        height: 40px;
        margin: 0 10px 0 0;
        img{
          display: block;
          width: 100%;
        }
      }
      &__name{
        max-width: 200px;
        overflow: hidden;
        white-space: nowrap;
      }
      &__drop{
        position: absolute;
        top: 100%;
        right: -10px;
        border: 1px solid $color2;
        background: $color1;
        width: 150px;
        box-sizing: border-box;
        padding: 10px;
        display: none;
        li +li{
          border-top: 1px solid $color2;
        }
      }
    }
  }
</style>
