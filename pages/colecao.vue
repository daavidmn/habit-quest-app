<template>
  <view class="app">
    <text>Pagina colecao</text>
    <button title="amigos" :on-press="goToPage" :navigation="this.props.navigation" />
  </view>
</template>

<script>
export default {
  methods: {
    goToPage() {
      this.navigation.navigate("CadastroHabito");
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