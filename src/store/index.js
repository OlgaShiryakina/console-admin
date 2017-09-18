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
        name: '',
        photo: ''
      },
      {
        name: 'olgashiryakina@gmail.com',
        photo: 'https://lh3.googleusercontent.com/-lUEHAAmaUHM/AAAAAAAAAAI/AAAAAAAAAAA/APJypA30pxufELWVnSio9-WUH8DHM1Fc9w/s32-c-mo/photo.jpg'
      }
    ],
    currentUser: 1
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

