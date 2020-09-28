<template>
  <view class="container">
    <text class="text-title">Avatares desbloqueados: x/16 (y%)</text>
    <view class="avatar-container">
      <view v-for="index in 20" :key="index">
        <touchable-opacity :on-press="() => selectAvatar(index)">
          <view class="avatar-box" :class="getClass(index)">
            <AvatarScreenViewer :avatarid="index" :active="true" />
          </view>
        </touchable-opacity>
      </view>
    </view>
    <touchable-opacity class="botao-apoiador">
      <text class="text-apoiador">Confirmar</text>
    </touchable-opacity>
  </view>
</template>

<script>
import AvatarScreenViewer from "../components/AvatarScreenViewer";
export default {
  components: {
    AvatarScreenViewer,
  },
  props: {
    navigation: {
      type: Object,
    },
  },
  data() {
    return {
      classSelected: [],
    };
  },
  methods: {
    selectAvatar(indice) {
      let v = indice - 1;
      for (let i = 0; i < 20; i++) {
        this.classSelected[i] = false;
      }
      this.classSelected[v] = true;
      // console.log(this.classSelected)
    },
    getClass(indice) {
      return {
        'selected': this.classSelected[indice - 1],
      };
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  padding-right: 15px;
  padding-left: 15px;
  align-items: center;
  background-color: #e8e8e8;
}
.text-title {
  margin-top: 20px;
  font-size: 16px;
  font-style: normal;
  /* font-weight: bold; */
}
.avatar-container {
  height: 450px;
  margin-top: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  /* background-color: blue; */
  justify-content: space-between;
}
.avatar-box {
  width: 80px;
  height: 80px;
  background-color: white;
  margin: 5px;
  border-radius: 8px;
}
.selected {
  border-color: #386641;
  border-width: 2px;
}

.botao-apoiador {
  height: 45px;
  width: 60%;
  margin-top: 50px;
  border-radius: 20px;
  background-color: #386641;
  align-items: center;
  justify-content: center;
}

.text-apoiador {
  font-size: 12px;
  font-weight: bold;
  color: white;
}
</style>