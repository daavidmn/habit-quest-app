<template>
  <view class="app">
    <text>Conquistas teste de navegação</text>
    <button title="ir para expedicao" :on-press="goToPage" :navigation="this.props.navigation" />
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
      this.navigation.navigate("expedicao", "teste");
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