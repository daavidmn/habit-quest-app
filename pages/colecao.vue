<template>
  <view class="app">
    <view class="header">
      <view class="avatar-mini">
        <image
          :style="{width: 60, height: 60}"
          :source="require('../assets/img/avatar/020-superhero-19.png')"
        />
      </view>
      <view class="box-centro">
        <view class="box-cima">
          <text class="nome">Zé Monstrão</text>
        </view>
        <view class="box-baixo">
          <view class="box-esquerda">
            <text class="texto-baixo">Nível 150</text>
          </view>
          <view class="box-direita">
            <view class="achievements">
              <MaterialCommunityIcons name="crown" :size="24" color="white" />
              <text class="texto-baixo">Nível 15</text>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
//import Habitviewer from "../components/Habitviewer";
//import ActionButton from "react-native-action-button";
//import { constUser } from "../consts/user";
//import { AsyncStorage } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default {
  components: {
    MaterialCommunityIcons,
  },
  props: {
    navigation: {
      type: Object,
    },
  },
};
</script>


<style scoped>
.app {
  width: 100%;
  height: 100%;
}

.header {
  padding-left: 5px;
  padding-right: 5px;
  width: 100%;
  height: 115px;
  background-color: #6a994e;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
}

.box-centro {
  width: 60%;
}

.box-cima {
}

.box-esquerda {
  align-items: center;
}

.box-direita {
  align-items: center;
}

.box-baixo {
  justify-content: flex-start;
  flex-direction: row;
}

.nome {
  height: 38px;
  left: 0px;
  top: 0px;
  font-style: normal;
  font-weight: 800;
  font-size: 28px;
  line-height: 32px;
  display: flex;
  align-items: center;

  color: #ffffff;
}

.avatar-mini {
  width: 20%;
  height: 67px;
  background-color: #f2e8cf;
  border-color: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  align-items: center;
  justify-content: center;
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
  flex-direction: row;
}
.texto-baixo {
  padding-right: 10px;
  color: white;
}
</style>