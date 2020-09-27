<template>
  <view class="habit-box">
    <view class="check-container">
      <view class="check-box"></view>
    </view>

    <view class="texts">
      <touchable-opacity :on-press="() => goToModificar()">
      <view class="above-text">
        <view class="description">
          <text class="title">{{ title }}</text>
          <text>+{{ xp }}xp</text>
        </view>
      </view>
      <view class="below-text">
        <view>
          <text>{{ hora }}:{{minutos}}         Dia: {{dia}}</text>
        </view>
      </view>
      </touchable-opacity>
    </view>
  

    <view class="sequence">
      <MaterialCommunityIcons name="fire" :size="40" color="#d3d3d3" />
    </view>
  </view>
</template>

<script>
import { MaterialCommunityIcons } from "@expo/vector-icons";
import store from "../store";
import Vue from "vue-native-core";

Vue.prototype.$store = store;
export default {
  components: {
    MaterialCommunityIcons,
  },
  methods: {
      goToModificar() {

      this.$store.commit("setHabito",this.rotinaId);

      console.log("Habito selecionado: " + this.rotinaId);

      this.navigation.push("modificarHabito");
    },

  },
  props: ["title", "xp", "hora", "minutos", "dia", "rotinaId", "navigation"],

};
</script>

<style scoped>
.habit-box {
  margin-bottom: 10px;
  width: 350px;
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

.texts {
  width: 60%;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.description {
  flex-direction: row;
}

.title {
  margin-right: 10px;
}

.sequence {
  width: 20%;
  align-items: center;
  justify-content: center;
}
</style>