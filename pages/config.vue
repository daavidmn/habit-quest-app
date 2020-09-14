<template>
  <view class="app">
    <text>Pagina config</text>
    <button title="Go to home screen" @press="goToHomeScreen"></button>
  </view>
</template>

<script>
export default {
  props: {
    navigation: {
      type: Object,
    },
  },
  methods: {
    goToHomeScreen() {
      this.navigation.navigate("Expedicao");
    },
  },
};
</script>

<style>
.app {
  background-color: grey;
  width: 100%;
  height: 100%;
}
</style>