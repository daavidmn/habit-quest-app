<template>
  <view class="app">
    <text>Pagina expedicaaao {{ test }}</text>
    <button
      :on-press="incrementar"
      title="incrementar"
      color="#841584"
      accessibility-label="Learn more about this purple button"
    />
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
  data: function () {
    return {
      test: 0,
    };
  },
  created: function () {
    this.test = 10;
  },
  watch: {
    navigation: function (newVal, oldVal) {
      // watch it
      console.log("Prop changed: ", newVal, " | was: ", oldVal);
    },
  },
  beforeMount() {
    console.log("xablau");
  },
  mounted() {
    this.test = 10;
  },
  methods: {
    incrementar() {
      this.test = this.test + 1;
      console.log(this.navigation);
    },
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