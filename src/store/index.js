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
    storeHabitoSelecionado: '0',
    storeUsuarioSalvar: 'b',
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
                  level: 1,
                  xpAtual: 0,
                  xpProx: 100,
                  totalRotinas: 0,
                  rotinasCompletadas:0,
                  habitos: [
                    // {
                    //   titulo: 'Corrida com cachorro',
                    //   xp: 100,
                    //   rotinaSemanal: [
                    //     { //baseado em objetos tipo Date
                    //       diaSetado: 1, //getDay()     
                    //       horaSetada: 10, //getHour()
                    //       minutoSetado: 15, //getMinute()
                    //       notificar: true,
                    //       completado: false,
                    //     },
                    //     { //baseado em objetos tipo Date
                    //       diaSetado: 3, //getDay()     
                    //       horaSetada: 13, //getHour()
                    //       minutoSetado: 18, //getMinute()
                    //       notificar: true,
                    //       completado: false,
                    //     },
                    //     { //baseado em objetos tipo Date
                    //       diaSetado: 4, //getDay()     
                    //       horaSetada: 15, //getHour()
                    //       minutoSetado: 19, //getMinute()
                    //       notificar: true,
                    //       completado: false,
                    //     },
                    //   ],
                    // },
                    // {
                    //   titulo: 'Futebol',
                    //   xp: 100,
                    //   rotinaSemanal: [
                    //     { //baseado em objetos tipo Date
                    //       diaSetado: 1, //getDay()     
                    //       horaSetada: 10, //getHour()
                    //       minutoSetado: 15, //getMinute()
                    //       notificar: true,
                    //       completado: false,
                    //     },
                    //     { //baseado em objetos tipo Date
                    //       diaSetado: 3, //getDay()     
                    //       horaSetada: 13, //getHour()
                    //       minutoSetado: 18, //getMinute()
                    //       notificar: true,
                    //       completado: false,
                    //     },
                    //     { //baseado em objetos tipo Date
                    //       diaSetado: 4, //getDay()     
                    //       horaSetada: 15, //getHour()
                    //       minutoSetado: 18, //getMinute()
                    //       notificar: true,
                    //       completado: false,
                    //     },
                    //   ],
                    // }
                  ],
                }
              ];
            }

            user[0].totalRotinas = 0;
            user[0].rotinasCompletadas = 0;
            

             if(user[0].habitos){
              for(var i=0;i<user[0].habitos.length;i++){
                user[0].totalRotinas += user[0].habitos[i].rotinaSemanal.length;
                if(user[0].habitos[i].rotinaSemanal){
                for (var j=0;j<user[0].habitos[i].rotinaSemanal.length;j++){
                  if(user[0].habitos[i].rotinaSemanal[j].completado){
                user[0].rotinasCompletadas += 1;
                
                }
              }
              }
            }
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
                level: 1,
                xpAtual: 0,
                xpProx: 100,
                totalRotinas: 0,
                rotinasCompletadas:0,
                habitos: [
                  // {
                  //   titulo: 'Corrida com cachorro',
                  //   xp: 100,
                  //   rotinaSemanal: [
                  //     { //baseado em objetos tipo Date
                  //       diaSetado: 1, //getDay()     
                  //       horaSetada: 10, //getHour()
                  //       minutoSetado: 15, //getMinute()
                  //       notificar: true,
                  //       completado: false,
                  //     },
                  //     { //baseado em objetos tipo Date
                  //       diaSetado: 3, //getDay()     
                  //       horaSetada: 13, //getHour()
                  //       minutoSetado: 18, //getMinute()
                  //       notificar: true,
                  //       completado: false,
                  //     },
                  //     { //baseado em objetos tipo Date
                  //       diaSetado: 4, //getDay()     
                  //       horaSetada: 15, //getHour()
                  //       minutoSetado: 19, //getMinute()
                  //       notificar: true,
                  //       completado: false,
                  //     },
                  //   ],
                  // },
                  // {
                  //   titulo: 'Futebol',
                  //   xp: 100,
                  //   rotinaSemanal: [
                  //     { //baseado em objetos tipo Date
                  //       diaSetado: 1, //getDay()     
                  //       horaSetada: 10, //getHour()
                  //       minutoSetado: 15, //getMinute()
                  //       notificar: true,
                  //       completado: false,
                  //     },
                  //     { //baseado em objetos tipo Date
                  //       diaSetado: 3, //getDay()     
                  //       horaSetada: 13, //getHour()
                  //       minutoSetado: 18, //getMinute()
                  //       notificar: true,
                  //       completado: false,
                  //     },
                  //     { //baseado em objetos tipo Date
                  //       diaSetado: 4, //getDay()     
                  //       horaSetada: 15, //getHour()
                  //       minutoSetado: 19, //getMinute()
                  //       notificar: true,
                  //       completado: false,
                  //     },
                  //   ],
                  // }
                ],
              }
            ];
            commit('setUsuario', user);
            resolve();

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

            user[0].totalRotinas = 0;
            user[0].rotinasCompletadas = 0;
            

             if(user[0].habitos){
              for(var i=0;i<user[0].habitos.length;i++){
                user[0].totalRotinas += user[0].habitos[i].rotinaSemanal.length;
                if(user[0].habitos[i].rotinaSemanal){
                for (var j=0;j<user[0].habitos[i].rotinaSemanal.length;j++){
                  if(user[0].habitos[i].rotinaSemanal[j].completado){
                user[0].rotinasCompletadas += 1;
                
                }
              }
              }
            }
          }

            commit('setUsuario', user);
            resolve();

          } catch (error) {
            console.log("ENTROU NO CATCH");
            console.error(error);
            return null;
          }
        }, 1000)
      })
    },



  },
  // Like method in component.
  // To save data to the state.
  mutations: {
    setUsuario(state, storeUsuario) {
      Vue.set(state, 'storeUsuario', storeUsuario);
    },

    setHabito(state, storeHabitoSelecionado) {
      Vue.set(state, 'storeHabitoSelecionado', storeHabitoSelecionado);
    },

    setSalvarUsuario(state, storeUsuarioSalvar) {
      Vue.set(state, 'storeUsuarioSalvar', storeUsuarioSalvar);
    },

  }
})