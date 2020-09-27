<template>
  <view class="container">
    <view class="box-above">
      <view class="box-above-left">
        <view v-if="dia === 0">
          <text :style="{fontSize: 14, color: 'white'}">Domingo</text>
        </view>
        <view v-else-if="dia === 1">
          <text :style="{fontSize: 14, color: 'white'}">Segunda-feira</text>
        </view>
        <view v-else-if="dia === 2">
          <text :style="{fontSize: 14, color: 'white'}">Terça-feira</text>
        </view>
        <view v-else-if="dia === 3">
          <text :style="{fontSize: 14, color: 'white'}">Quarta-feira</text>
        </view>
        <view v-else-if="dia === 4">
          <text :style="{fontSize: 14, color: 'white'}">Quinta-feira</text>
        </view>
        <view v-else-if="dia === 5">
          <text :style="{fontSize: 14, color: 'white'}">Sexta-feira</text>
        </view>
        <view v-else-if="dia === 6">
          <text :style="{fontSize: 14, color: 'white'}">Sábado</text>
        </view>
      </view>
      
      <view class="box-above-right">
        <MaterialCommunityIcons name="window-close" :size="14" color="white" />
      </view>
    
    </view>

    <view class="box-below">
      <text :style="{fontSize: 14, color: 'white'}">Notificar às {{ hora }}:{{ minuto }}</text>
    </view>
  </view>
</template>

<script>
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default {
  components: {
    MaterialCommunityIcons,
  },
  props: ["dia", "hora", "minuto","idHabito"],
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 100px;
  margin-bottom: 10px;
  margin-top: 10px;
}

.box-above {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50%;
}
.box-above-left {
  border-top-left-radius: 8px;
  width: 80%;
  height: 100%;
  background-color: #6a994e;
  justify-content: center;
  align-items: center;
}

.box-above-right {
  border-top-right-radius: 8px;
  width: 20%;
  height: 100%;
  background-color: #567e3f;
  justify-content: center;
  align-items: center;
}

.box-below {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50%;
  background-color: #386641;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  justify-content: center;
  align-items: center;
}
</style>