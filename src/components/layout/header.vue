<template>
  <header class="header">
    <div class="header__top">
      <div class="header__syncDate">
        <a class="header__syncDate__text" href="javascript:void(0);">Дата последней синхронизации: 11.07.2017</a>
        <a class="button is-primary" href="javascript:void(0);" title="синхронизировать"><icon name="refresh" scale="1"></icon></a>
      </div>
      <div class="header__right">
        <div class="header__search">
          <form class="header__search__form">
            <input type="search" class="input">
            <icon name="search" scale="1.3"></icon>
          </form>
        </div>
        <div class="header__user">
          <icon name="user-circle" scale="2"></icon>
          <div class="header__user__name">{{ user.name }}</div>
          <ul class="header__user__drop">
            <li><a href="javascript:void(0);">Настройки</a></li>
            <li><a href="javascript:void(0);">Выход</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="header__page">
      <h1 class="header__page__title">Catalog <br> http://gergeo.se/RWD-Table-Patterns/</h1>
      <div class="dropdown" :class="{ 'is-active': isActive}">
        <div class="dropdown-trigger">
          <button class="button" aria-haspopup="true" aria-controls="dropdown-menu"  @click="isActive = !isActive">
            <span>Dropdown button</span>
            <span class="icon is-small">
        <i class="fa fa-angle-down" aria-hidden="true"></i>
      </span>
          </button>
        </div>
        <div class="dropdown-menu">
          <div class="dropdown-content">
            <a class="dropdown-item">
              Dropdown item
            </a>
            <a class="dropdown-item">
              Other dropdown item
            </a>
            <a href="#" class="dropdown-item is-active">
              Active dropdown item
            </a>
            <a href="#" class="dropdown-item">
              Other dropdown item
            </a>
            <hr class="dropdown-divider">
            <a href="#" class="dropdown-item">
              With a divider
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Icon from 'vue-awesome/components/Icon'
  import 'vue-awesome/icons/user-circle'
  import 'vue-awesome/icons/search'
  import 'vue-awesome/icons/refresh'

  export default {
    components: {
      Icon
    },
    data () {
      return {
        isActive: false
      }
    },
    created: function () {
      // `this` points to the vm instance
      console.log(this.headerHeight)
    },
    computed: {
      ...mapGetters({
        user: 'getUser'
      })
    },
    methods: {
//      abc () {
//        this.isActive = !this.isActive
//        console.log(this.isActive)
//      }
    }
  }
</script>

<style lang="scss">
  @import '../../scss/variables';
  .header{
    position: fixed;
    z-index: 2;
    left: 0;
    top: 0;
    padding-left: $sidebarWidth;
    width: 100%;
    box-sizing: border-box;
    &__top{
      height: $headerHeight;
      background: $color1;
      padding: 0 10px 0 ($navIconWidth + 10px);
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid $color2;
      position: relative;
      z-index: 3;
    }
    &__syncDate{
      &__text{
        color: #fff;
        font-size: 13px;
        display: inline-block;
        width: 170px;
        &:hover{
          color: #fff;
          text-decoration: underline;
        }
      }
    }
    &__right{
      display: flex;
      align-items: center;
      height: 100%;
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
        width: 300px;
      }
    }
    &__user{
      position: relative;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: $color0;
      &:hover .header__user__drop{
        display: block;
      }
      a, a:hover{
        color: $color0;
      }
      .fa-icon{
        margin: 0 10px 0 0;
      }
      &__name{
        max-width: 100px;
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
    &__page{
      background: #e3e3e3;
      background: #fff;
      padding: 0 10px;
      border-bottom: 1px solid $color2;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
</style>
