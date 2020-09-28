<template>
  <view class="container">
    <view class="header">
      <view class="avatar-mini">
        <image :style="{ width: 25, height: 25 }" :source="avatar[2].src" />
      </view>
      <view class="progress-bar">
        <text>Nível {{ userr[0].level }}</text>
        <text>Exp: {{ userr[0].xpAtual }} / {{ userr[0].xpProx }}</text>
        <view
          class="progress-fill"
        ></view>
      </view>
      <view class="tasks">
        <MaterialCommunityIcons
          name="calendar-check"
          :size="24"
          color="white"
        />
        <text class="tasks-text">{{ userr[0].totalRotinas }}</text>
      </view>
      <view class="achievements">
        <MaterialCommunityIcons name="crown" :size="24" color="white" />
        <text class="achievements-text">{{ userr[0].rotinasCompletadas }}</text>
      </view>
    </view>

    <modal
      animationType="fade"
      :transparent="true"
      :visible="modalLevelVisible"
    >
      <view class="centered-view">
        <view class="modal-view">
          <view class="modal-top">
            <text :style="{ fontSize: 20, fontWeight: 'bold' }"
              >Você atingiu o Nível {{ userr[0].level }}!</text
            >

            <text class="modal-text-top bold"
              >Continue subindo de nível e ganhe recompensas</text
            >
          </view>
          <touchable-opacity
            class="credits-button"
            :on-press="() => switchModalLevel()"
          >
            <text :style="{ fontSize: 16, color: 'white' }">Ok</text>
          </touchable-opacity>
        </view>
      </view>
    </modal>

    <modal
      animationType="fade"
      :transparent="true"
      v-if="userr[0].novoUsuario"
    >
      <view class="centered-view">
        <view class="modal-view">
          <view class="modal-top">
            <text :style="{ fontSize: 20, fontWeight: 'bold' }"
              >Bem vindo ao HabitQuest!</text
            >

            <text class="modal-text-top bold"
              >Conte-nos vosso nome: </text
            >
            <text-input
          :placeholder="'Seu nome'"
          :style="{
            height: 40,
            padding: 10,
            width: '100%',
            borderColor: '#6A994E',
            borderWidth: 2,
            borderRadius: 8,
            backgroundColor: 'white',
          }"
          v-model="nome"
        />

          </view>
          <touchable-opacity
            class="credits-button"
            :on-press="() => switchNovoUsuario()"
          >
            <text :style="{ fontSize: 16, color: 'white' }">Confirmar</text>
          </touchable-opacity>
        </view>
      </view>
    </modal>

    <!-- <view class="weekbar">
      <text>{{ userr[0].nome }}</text>
    </view> -->
    <view class="habits">
      <view class="no-habits-container" v-if="userr[0].habitos == false">
        <text class="text-title"
          >Você ainda
          <text :style="{ color: 'rgba(56,102,65, 1)' }">não tem hábitos</text
          >.</text
        >
        <text class="text-title2"
          >Que tal começar
          <text :style="{ color: 'rgba(56,102,65, 1)' }">adicionando um</text
          >?</text
        >
      </view>
      <view class="scroll-area">
        <ScrollView :fadingEdgeLength="0" :showsVerticalScrollIndicator="true">
          <view class="scroll-box">
            <view v-if="userr[0].habitos != false">
              <view v-for="(habito, key) in userr[0].habitos" :key="key">
                <view
                  v-for="(rotina, chave) in userr[0].habitos[key].rotinaSemanal"
                  :key="chave"
                >
                  <view
                    v-if="
                      !userr[0].habitos[key].rotinaSemanal[chave].completado
                    "
                  >
                    <Habitviewer
                      @completa-rotina="() => completarRotina(key, chave)"
                      :title="habito.titulo"
                      :xp="habito.xp"
                      :hora="rotina.horaSetada"
                      :minutos="rotina.minutoSetado"
                      :dia="rotina.diaSetado"
                      :diaSemana="rotina.diaSemana"
                      :habitoId="key"
                      :navigation="navigation"
                    />
                  </view>
                </view>
              </view>
            </view>
          </view>
        </ScrollView>
      </view>
    </view>
    <ActionButton
      buttonColor="rgba(56,102,65, 1)"
      :size="60"
      class="botao"
      :onPress="goToCadastrar"
    ></ActionButton>
  </view>
</template>

<script>
import Habitviewer from "../components/Habitviewer";
import ActionButton from "react-native-action-button";
import { constUser } from "../consts/user";
import { constAvatar } from "../consts/avatar";
import { AsyncStorage } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import store from "../store";
import Vue from "vue-native-core";

Vue.prototype.$store = store;

export default {
  components: {
    Habitviewer,
    ActionButton,
    MaterialCommunityIcons,
  },
  data() {
    return {
      nome:"",
      avatarIndex: 0,
      loaded: false,
      avatar: constAvatar,
      user: constUser,
      modalLevelVisible: false,
      modalNovoUsuarioVisible: false,
      user:"",
    };
  },

  computed: {
    userr() {
      return this.$store.state.storeUsuario;
    },
  },

  created() {
    this.$store.dispatch("fetchUsuario");

    this.user = this.$store.state.storeUsuario;

    this.avatarIndex = this.userr[0].avatarIndex;

    this.modalNovoUsuarioVisible = this.user[0].novoUsuario;  },

  props: {
    navigation: {
      type: Object,
    },
  },
  methods: {
    getAvatarIndex: function () {
      if (this.userr) {
        return this.userr[0].avatarIndex;
      } else return 0;
    },
    switchModalLevel: function () {
      this.modalLevelVisible = false;
    },
    switchNovoUsuario: function (nomeUsuario) {

      this.userr[0].nome = this.nome;
      this.userr[0].novoUsuario = false;

      this.$store.commit("setSalvarUsuario", this.userr);

      this.$store.dispatch("salvarUsuario");

      this.$store.dispatch("fetchUsuario");

      this.modalNovoUsuarioVisible = false;
    },
    completarRotina: function (habitosId, rotinaId) {
      let hoje = new Date();

      this.userr[0].habitos[habitosId].rotinaSemanal[
        rotinaId
      ].completado = true;

      this.userr[0].xpAtual += this.userr[0].habitos[habitosId].xp;

      if (this.userr[0].xpAtual >= this.userr[0].xpProx) {
        this.userr[0].level += 1;
        this.userr[0].xpAtual -= this.userr[0].xpProx;
        this.userr[0].xpProx = 100 + 50 * this.userr[0].level;

        this.modalLevelVisible = true;
      }

      this.$store.commit("setSalvarUsuario", this.userr);

      this.$store.dispatch("salvarUsuario");

      this.$store.dispatch("fetchUsuario");
    },
    goToCadastrar: function () {
      this.navigation.navigate("cadastroHabito");
    },
    onPressButton: function () {
      alert("Clicked Image");
    },
  },
};
</script>

<style scoped>
.scroll-area {
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 85%;
}
.centered-view {
  background-color: rgba(0, 0, 0, 0.8);
  flex: 1;
  justify-content: center;
  align-items: center;
}

.modal-view {
  width: 300px;
  background-color: white;
  border-radius: 20;
  padding: 35;
  align-items: center;
  justify-content: space-around;
}
.modal-top {
  justify-content: space-around;
  align-items: center;
  height: 100px;
}

.modal-bottom {
  margin-top: 20px;
  width: 100%;
  height: 150px;
  justify-content: space-around;
}
.modal-text-top {
  text-align: center;
  font-size: 16px;
}
.modal-text-bottom {
  /* text-align: center; */
  font-size: 12px;
}
.bold {
  font-weight: bold;
}
.credits-button {
  height: 45px;
  width: 30%;
  margin-top: 30px;
  border-radius: 8px;
  background-color: #386641;
  align-items: center;
  justify-content: center;
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
.container {
  display: flex;
  height: 100%;
}

.header {
  padding-left: 10px;
  padding-right: 10px;
  height: 8%;
  background-color: #6a994e;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
}
.avatar-mini {
  width: 41px;
  height: 32px;
  background-color: #f2e8cf;
  border-color: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  align-items: center;
  justify-content: center;
}
.progress-bar {
  height: 32px;
  width: 187px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}

.progress-fill {
  position: absolute;
  left: 0px;
  z-index: -1;
  height: 32px;
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
  background-color: #a7c957;
}
.tasks {
  height: 32px;
  width: 50px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}
.tasks-text {
  color: white;
}
.achievements {
  height: 32px;
  width: 50px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}
.achievements-text {
  color: white;
}

.weekbar {
  height: 112px;
  background-color: #f2e8cf;
  border-bottom-left-radius: 16px;
}

.habits {
  padding-left: 15px;
  padding-right: 15px;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 92%;
}

.scroll-box {
  padding-top: 20;
}
.no-habits-container {
  height: 100%;
  align-items: center;
  justify-content: center;
}

.habit-box {
  margin-bottom: 10px;
  width: 100%;
  height: 82px;
  background-color: #f0f0f0;
  border-radius: 16px;
  flex-direction: row;
}

.check-container {
  height: 100%;
  width: 20%;
  border-bottom-left-radius: 16px;
  border-top-left-radius: 16px;
  background-color: #6a994e;
  align-items: center;
  justify-content: center;
}

.check-box {
  height: 30px;
  width: 30px;
  border-width: 2px;
  border-color: white;
  border-radius: 6px;
}

.botaoCadastro {
  position: absolute;
  right: 20;
  top: 0;
}

.botaoVisual {
  background-color: #386641;
  width: 88px;
  height: 88px;
  border-radius: 44px;
}
.botao {
  position: absolute;
  bottom: 0px;
}

.text-title {
  font-size: 20px;
  font-style: normal;
  font-weight: bold;
}
.text-title2 {
  font-size: 16px;
  font-style: normal;
  font-weight: bold;
}
.text-subtitle {
  font-size: 16px;
  font-style: normal;
  /* font-weight: bold; */
}
</style>