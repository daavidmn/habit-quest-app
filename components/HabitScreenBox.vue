<template>
  <view class="container">
    <view class="box-above">
      <view>
        <text>{{ dia }}</text>
      </view>
      <view></view>
    </view>

    <view class="box-below">
      <text>{{ hora }}:{{ minuto }}</text>
    </view>
  </view>
</template>

<script>
export default {
  props: ["dia", "hora", "minuto"],
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 100px;
}

.box-above {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50%;
  background-color: #6a994e;
}

.box-below {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50%;
  background-color: #386641;
}
</style>