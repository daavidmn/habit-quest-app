import Vuex from 'vuex'
import Vue from 'vue-native-core'
import { AsyncStorage } from "react-native";

Vue.use(Vuex)

export default new Vuex.Store({
  // Like data in component.
  // We are keeping our data in the state.
  state: {
    storeUsuario: ''
  },
  // Like computed properties in component.
  // You can use getters to acess state in the store
  getters: {

  },
  // Like method in component.
  // To perform actions that usually results in data
  actions: {
    fetchUsuario() {
      AsyncStorage.getItem("Usuario")
        .then((usuarioSalvo) => {
          const usuarioParsed = JSON.parse(usuarioSalvo);
          const user = ''
          if (usuarioParsed) {
            user = usuarioParsed;
          } else {
            user = 'teste'
          }
          commit('setUsuario', user)
          return state.user
        })
        .catch(() => { });
    }

  },
  // Like method in component.
  // To save data to the state.
  mutations: {
    setUsuario(state, user) {
      Vue.set(state, 'user', user)
    }

  }
})