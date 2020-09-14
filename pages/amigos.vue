<template>
  <view class="app">
    <text>Pagina amigos</text>
    <button title="ir para o inicio" :on-press="goToPage" :navigation="this.props.navigation" />
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
    goToPage() {
      this.navigation.navigate("inicio");
    },
  },
};
</script>

<style>
.app {
  width: 100%;
  height: 100%;
}
</style>