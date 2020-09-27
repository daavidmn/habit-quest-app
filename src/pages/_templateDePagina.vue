<template>
  <view class="container">
    <text>Página de template</text>
    <button
      title="ir para outra página"
      :on-press="goToPage"
      :navigation="this.props.navigation"
    />
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
.container {
  width: 100%;
  height: 100%;
}
</style>