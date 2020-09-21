<template>
  <view class="config">
    <text class="titulo">Configurações</text>
    <text class="subtitulo">Trocar de nome</text>

    <text-input
      :style="{height: 40, padding:10, width: '100%', borderColor: '#6A994E', borderWidth: 2, borderRadius: 8}"
      v-model="nomeUsuario"
    />

    <touchable-opacity class="confirma-creditos" :on-press="() => trocarNomeUsuario()">
      <text class="text-confirma-creditos">Confirmar</text>
    </touchable-opacity>

    <text class="subtitulo">Notificações</text>
    <touchable-without-feedback :on-press="() => valueChange()">
      <view class="notificacoes">
        <text>Permitir Notificações</text>
        <switch
          :on-value-change="handleChange1"
          :value="value1"
          :track-color="{ false: '#F0F0F0', true: '#A7C957' }"
          thumb-color="#386641"
        />
      </view>
    </touchable-without-feedback>

    <!-- <view class="notificacoes">
      <text>Permitir Roubo de Dados</text>
      <switch
        :on-value-change="handleChange2"
        :value="value2"
        :track-color="{ false: '#F0F0F0', true: '#A7C957' }"
        thumb-color="#386641"
      />
    </view>-->


    <text class="subtitulo2" :style="{marginTop: 40}">Resetar Usuário</text>
    <text>Apagar dados e reiniciar memória da aplicação</text>
    <touchable-opacity class="confirma-creditos" :on-press="() => resetarUsuario()">
      <text class="text-confirma-creditos">Reset do Usuario</text>

    </touchable-opacity>

    <text class="subtitulo2" :style="{marginTop: 40}">Gerenciamento de conta</text>

    <text>Cuidado, essas ação é irreversível</text>
    <touchable-opacity class="resetar" :on-press="() => resetarUsuario()">
      <text class="text-confirma-creditos">Resetar progresso</text>
    </touchable-opacity>
  </view>
</template>

<script>
import { constUser } from "../consts/user";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AsyncStorage } from "react-native";
import { Alert } from "react-native";
import store from "../store";
import Vue from "vue-native-core";

Vue.prototype.$store = store;

export default {
  data: function () {
    return {
      value1: false,
      value2: false,
      nomeUsuario: "",
      user:"",
      salvarUsuario:"",
    };
  },
  computed: {
    userr() {
      return this.$store.state.storeUsuario;
    },
  },
  methods: {
    valueChange() {
      this.value1 = !this.value1;
    },
    handleChange1: function (val) {
      this.value1 = val;
    },
    handleChange2: function (val) {
      this.value2 = val;
    },
    resetarUsuario: function () {
      Alert.alert(

                'Reset de Usuario',
                'Você tem certeza que deseja resetar?',
                [   {text: 'Cancelar', onPress: () => console.log("Cancelar"), style: 'cancel'},
                    {text: 'Confirmar', onPress: () => { 

                      console.log("------------Inicio Reiniciar Usuario-------------");

                      this.$store.dispatch("resetarDados");

                      this.$store.dispatch("fetchUsuario");

                      

                      
                      console.log("------------Fim Reiniciar Usuario-------------");


    }},
                ],
                { cancelable: false });
      
      this.nomeUsuario = this.userr[0].nome;
      
    },


    trocarNomeUsuario: function() {


console.log("------------Inicio Alterar Nome Usuario-------------");

      this.$store.dispatch("fetchUsuario");

      this.userr[0].nome = this.nomeUsuario;

      this.salvarUsuario = JSON.stringify(this.userr);

      AsyncStorage.setItem("Usuario", this.salvarUsuario)
        .then(() => {
          Alert.alert(
                'Seu nome foi alterado',
                'Nome alterado com sucesso',
                [
                    {text: 'OK', onPress: () => {
                  this.$store.dispatch("fetchUsuario");
                this.nomeUsuario = this.userr[0].nome;
              this.navigation.navigate("inicio")}},
                ],
                { cancelable: false }
            );
          
        })
        .catch(() => {
          Alert.alert(
                'Erro',
                'Ocorreu um erro ao alterar seu nome',
                [
                    {text: 'OK', onPress: () => {
                  this.$store.dispatch("fetchUsuario");
                this.nomeUsuario = this.userr[0].nome;
              this.navigation.navigate("inicio")}},
                ],
                { cancelable: false }
            );
        });

      console.log("------------Fim Alterar Nome Usuario-------------");

       

      //this.navigation.navigate("inicio","teste");


    }

  },
  created() {

      this.$store.dispatch("fetchUsuario");

      this.nomeUsuario = this.userr[0].nome;

  },
  props: {
    navigation: {
      type: Object,
    },
  },
};
</script>


<style scoped>
.config {
  width: 100%;
  height: 100%;
  padding-right: 16px;
  padding-left: 16px;
  padding-top: 20px;
  background-color: #e5e5e5;
}

.titulo {
  height: 38px;
  width: 189px;
  left: 0px;
  top: 0px;
  margin-bottom: 24px;
  border-radius: nullpx;
  font-size: 28px;
  font-style: normal;
  font-weight: bold;
  line-height: 38px;
  text-align: left;
}

.input {
  background-color: white;
}

.subtitulo {
  height: 27px;
  width: 100%;
  left: 0px;
  top: 0px;
  margin-bottom: 8px;
  border-radius: nullpx;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 27px;
  text-align: left;
}

.subtitulo2 {
  height: 27px;
  width: 100%;
  left: 0px;
  top: 0px;
  border-radius: nullpx;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 27px;
  text-align: left;
}

.confirma-creditos {
  height: 38px;
  width: 100%;
  left: 0px;
  top: 4px;
  margin-top: 8px;
  margin-bottom: 24px;
  padding-top: 9px;
  border-radius: 8px;
  background-color: #386641;
}

.resetar {
  height: 38px;
  width: 100%;
  left: 0px;
  top: 4px;
  margin-top: 8px;
  margin-bottom: 24px;
  padding-top: 9px;
  border-radius: 8px;
  background-color: #bc4749;
}

.text-confirma-creditos {
  height: 19px;
  width: 100%;
  left: 0px;
  top: 0px;
  border-radius: nullpx;
  font-size: 14px;
  font-style: normal;
  font-weight: bold;
  line-height: 19px;
  text-align: center;
  color: white;
  align-self: center;
}

.notificacoes {
  width: 100%;
  height: 40px;
  left: 0px;
  background-color: #ffffff;
  border-radius: 8px;
  flex-direction: row;
  padding-left: 16px;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}
</style>