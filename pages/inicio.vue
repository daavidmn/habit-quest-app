<template>
  <view class="container">
    <view class="header">
      <view class="avatar-mini"></view>
      <view class="progress-bar">
        <text class="progress-text">LV 150</text>
        <text class="progress-text">1500/3000</text>
        <view class="progress-fill"></view>
      </view>
      <view class="tasks">
        <text class="tasks-text">20</text>
      </view>
      <view class="achievements">
        <text class="achievements-text">15</text>
      </view>
    </view>
    <view class="weekbar"></view>
    <view class="habits">
      <Habitbox title="Corrida com cachorro" xp="100" />
      <Habitbox title="Corrida com cachorro" xp="100" />
    </view>
    <ActionButton
      buttonColor="rgba(56,102,65, 1)"
      :size="88"
      class="botao"
      :onPress="goToCadastrar"
    ></ActionButton>
    <!-- <touchable-opacity class="botaoCadastro" :on-press="goToCadastrar">      
      <view class="botaoVisual"></view>
    </touchable-opacity>-->
    <text>asaasdass</text>
  </view>
</template>

<script>
import Habitbox from "../components/Habitbox";
import ActionButton from "react-native-action-button";

export default {
  components: {
    Habitbox,
    ActionButton,
  },
  data: function () {
    return {};
  },
  props: {
    navigation: {
      type: Object,
    },
  },
  methods: {
    goToCadastrar() {
      this.navigation.navigate("cadastroHabito");
    },
    onPressButton: function () {
      alert("Clicked Image");
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  height: 100%;
}

.header {
  padding-left: 10px;
  padding-right: 10px;
  height: 50px;
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
.progress-text {
}

.progress-fill {
  position: absolute;
  left: 0px;
  z-index: -1;
  width: 50%;
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
}
.tasks-text {
  color: white;
}
.achievements {
  height: 32px;
  width: 50px;
  align-items: center;
  justify-content: center;
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
  margin-top: 20px;
  width: 100%;
  height: 100%;
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
</style>