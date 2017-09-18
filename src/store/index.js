import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    navigation: [
      {
        name: 'Главная',
        page: 'home'
      },
      {
        name: 'Продукти',
        page: 'products'
      }
    ],
    users: [
      {
        name: ''
      },
      {
        name: 'olgashiryakina@gmail.com'
      }
    ],
    currentUser: 1
    // pages: [
    //   {
    //     path: '/category',
    //     name: 'Hello',
    //     title: 'Default',
    //     component: Hello
    //   },
    //   {
    //     path: '/',
    //     name: 'Category',
    //     title: 'Category',
    //     component: Catalog
    //   }
    // ]
  },
  getters: {
    getNav (state) {
      return state.navigation
    },
    getUser (state) {
      return state.users[state.currentUser]
    }
  },
  actions: {},
  mutations: {}
})
export default store

