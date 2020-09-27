<template>
  <view class="container">
    <text class="titulo">Amigos</text>
    <view class="search-box">
      <AntDesign class="search-icon" name="search1" :size="24" color="black" />
      <text-input
        class="search-field"
        :maxLength="25"
        :placeholder="'Encontre novos amigos'"
        :style="{
          height: 40,
          padding: 10,
          borderColor: '#6A994E',
        }"
      />
    </view>
  </view>
</template>

<script>
import { AntDesign } from "@expo/vector-icons";
export default {
  components: {
    AntDesign,
  },
  props: {
    navigation: {
      type: Object,
    },
  },
  methods: {
    goToPage() {
      this.navigation.navigate("expedicao", "teste");
    },
  },
};
</script>

<style>
.container {
  width: 100%;
  height: 100%;
  padding-right: 16px;
  padding-left: 16px;
  padding-top: 20px;
  background-color: #ededed;
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

.search-box {
  height: 40;
  width: 100%;
  border-color: #6a994e;
  border-width: 2;
  border-radius: 8;
  background-color: white;
  flex-direction: row;
  align-items: center;
  display: flex;
}

.search-icon {
  margin-left: 10;
}
.search-field {
  flex-grow: 1;
  font-size: 17px;
}
</style>