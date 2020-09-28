import Vuex from 'vuex'
import Vue from 'vue-native-core'
import { AsyncStorage } from "react-native";
import { constUser } from "../consts/user";

Vue.use(Vuex)

export default new Vuex.Store({
  // Like data in component.
  // We are keeping our data in the state.
  state: {
    storeUsuario: 'a',
    storeHabitoSelecionado:'0',
    storeUsuarioSalvar:'b',
    storeAtualizarInicio:'false',
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
            const usuarioParsed = JSON.parse(await AsyncStorage.getItem("Usuario"));
            let user = 'a';
            console.log("ENTROU NO TRY")
            if (usuarioParsed) {
              console.log("ENTROU NO if")
              user = usuarioParsed;
            } else {
              console.log("ENTROU NO else")
              user = [
  {
    nome: 'Zé Monstrão',
    xpTotal: '1500',
    habitos: [
      {
        titulo: 'Corrida com cachorro',
        xp: 100,
        rotinaSemanal: [
          { //baseado em objetos tipo Date
            diaSetado: 1, //getDay()     
            horaSetada: 10, //getHour()
            minutoSetado: 15, //getMinute()
            notificar: true,
            completado: false,
          },
          { //baseado em objetos tipo Date
            diaSetado: 3, //getDay()     
            horaSetada: 13, //getHour()
            minutoSetado: 18, //getMinute()
            notificar: true,
            completado: false,
          },
          { //baseado em objetos tipo Date
            diaSetado: 4, //getDay()     
            horaSetada: 15, //getHour()
            minutoSetado: 19, //getMinute()
            notificar: true,
            completado: false,
          },
        ],
      },
      {
        titulo: 'Futebol',
        xp: 100,
        rotinaSemanal: [
          { //baseado em objetos tipo Date
            diaSetado: 1, //getDay()     
            horaSetada: 10, //getHour()
            minutoSetado: 15, //getMinute()
            notificar: true,
            completado: false,
          },
          { //baseado em objetos tipo Date
            diaSetado: 3, //getDay()     
            horaSetada: 13, //getHour()
            minutoSetado: 18, //getMinute()
            notificar: true,
            completado: false,
          },
          { //baseado em objetos tipo Date
            diaSetado: 4, //getDay()     
            horaSetada: 15, //getHour()
            minutoSetado: 18, //getMinute()
            notificar: true,
            completado: false,
          },
        ],
      }
    ],
  }
];
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
    },

    async resetarDados({ commit, state }) {
      return new Promise(function (resolve, reject) {
        setTimeout(async () => {
          try {

            await AsyncStorage.clear();

            let user = [
  {
    nome: 'Zé Monstrão',
    xpTotal: '1500',
    habitos: [
      {
        titulo: 'Corrida com cachorro',
        xp: 100,
        rotinaSemanal: [
          { //baseado em objetos tipo Date
            diaSetado: 1, //getDay()     
            horaSetada: 10, //getHour()
            minutoSetado: 15, //getMinute()
            notificar: true,
            completado: false,
          },
          { //baseado em objetos tipo Date
            diaSetado: 3, //getDay()     
            horaSetada: 13, //getHour()
            minutoSetado: 18, //getMinute()
            notificar: true,
            completado: false,
          },
          { //baseado em objetos tipo Date
            diaSetado: 4, //getDay()     
            horaSetada: 15, //getHour()
            minutoSetado: 19, //getMinute()
            notificar: true,
            completado: false,
          },
        ],
      },
      {
        titulo: 'Futebol',
        xp: 100,
        rotinaSemanal: [
          { //baseado em objetos tipo Date
            diaSetado: 1, //getDay()     
            horaSetada: 10, //getHour()
            minutoSetado: 15, //getMinute()
            notificar: true,
            completado: false,
          },
          { //baseado em objetos tipo Date
            diaSetado: 3, //getDay()     
            horaSetada: 13, //getHour()
            minutoSetado: 18, //getMinute()
            notificar: true,
            completado: false,
          },
          { //baseado em objetos tipo Date
            diaSetado: 4, //getDay()     
            horaSetada: 15, //getHour()
            minutoSetado: 19, //getMinute()
            notificar: true,
            completado: false,
          },
        ],
      }
    ],
  }
];
            commit('setUsuario', user);
            alert("Usuário Resetado");

          } catch (error) {
            console.log("ENTROU NO CATCH")
            console.error(error);
            return null;
          }
        }, 1000)
      })
    },

    async salvarUsuario({ commit, state }) {
      return new Promise(function (resolve, reject) {
        setTimeout(async () => {
          try {

            const user = state.storeUsuarioSalvar;

            await AsyncStorage.setItem("Usuario", JSON.stringify(user));

            commit('setUsuario', user);

            alert("Usuário Atualizado");

          } catch (error) {
            console.log("ENTROU NO CATCH");
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
      Vue.set(state, 'storeUsuario', storeUsuario);
    },

    setHabito(state, storeHabitoSelecionado) {
      Vue.set(state,'storeHabitoSelecionado', storeHabitoSelecionado);
    },
    setSalvarUsuario(state, storeUsuarioSalvar) {
      Vue.set(state,'storeUsuarioSalvar', storeUsuarioSalvar);
    },
    setAtualizarInicio(state, storeAtualizarInicio) {
      Vue.set(state,'storeAtualizarInicio', storeAtualizarInicio);
    },
    
  }
})