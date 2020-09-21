import Vuex from 'vuex'
import Vue from 'vue-native-core'
import { AsyncStorage } from "react-native";
import { constUser } from "../consts/user";

Vue.use(Vuex)

export default new Vuex.Store({
  // Like data in component.
  // We are keeping our data in the state.
  state: {
    storeUsuario: 'a'
  },
  // Like computed properties in component.
  // You can use getters to acess state in the store
  getters: {

  },
  // Like method in component.
  // To perform actions that usually results in data
  actions: {
    // fetchUsuario({ commit, state }) {
    //   AsyncStorage.getItem("Usuario")
    //     .then((usuarioSalvo) => {
    //       const usuarioParsed = JSON.parse(usuarioSalvo);
    //       const user = '';
    //       if (usuarioParsed) {
    //         user = usuarioParsed;
    //       } else {
    //         user = constUser;
    //       }
    //       console.log('ENTROU NO THEN')
    //       commit('setUsuario', user);
    //       return state.storeUsuario;
    //     })
    //     .catch(() => {
    //       commit('setUsuario', 'oia');
    //       console.log('ENTROU NO CATCH')
    //       console.log(usuarioSalvo)
    //     });
    // }

    async fetchUsuario({ commit, state }) {
      return new Promise(function (resolve, reject) {
        setTimeout(async () => {
          try {
            const usuarioParsed = await AsyncStorage.getItem("Usuario");
            let user = 'a';
            console.log("ENTROU NO TRY")
            if (usuarioParsed) {
              console.log("ENTROU NO if")
              user = usuarioParsed;
            } else {
              console.log("ENTROU NO else")
              user = constUser;
            }
            console.log(user)
            commit('setUsuario', user)
            resolve();
            return state.storeUsuario;
          } catch (error) {
            console.log("ENTROU NO CATCH")
            console.error(error);
            return null;
          }
        }, 1000)
      })
    }

  },
  // Like method in component.
  // To save data to the state.
  mutations: {
    setUsuario(state, storeUsuario) {
      Vue.set(state, 'storeUsuario', storeUsuario)
    }

  }
})