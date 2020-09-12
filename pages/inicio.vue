<template>
  <view class="container" id="parent">
    <view class="header">
      <view class="avatar-mini"></view>
      <view class="progress-bar"></view>
      <view class="tasks"></view>
      <view class="achievements"></view>
    </view>
    <view class="weekbar"></view>
    <view class="habits">
      <view class="habit-box">
        <view class="check-container">
          <view class="check-box"></view>
        </view>
        <view class="habit-title"></view>
      </view>
      <view class="habit-box"></view>
      <view class="habit-box"></view>
      <view class="habit-box"></view>
    </view>
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
    goToAmigos() {
      this.navigation.navigate("amigos");
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
}

.header {
  padding-left: 10px;
  padding-right: 10px;
  height: 50px;
  background-color: #6a994e;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
}
.avatar-mini {
  width: 41px;
  height: 32px;
  background-color: #f2e8cf;
  border-color: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}
.progress-bar {
  height: 32px;
  width: 187px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
}
.tasks {
  height: 32px;
  width: 50px;
  background-color: red;
}
.achievements {
  height: 32px;
  width: 50px;
  background-color: red;
}

.weekbar {
  height: 112px;
  background-color: #f2e8cf;
  border-bottom-left-radius: 16px;
}

.habits {
  padding-left: 15px;
  padding-right: 15px;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  height: 100%;
}

.habit-box {
  margin-bottom: 10px;
  width: 100%;
  height: 82px;
  background-color: #f0f0f0;
  border-radius: 16px;
}

.check-container {
  height: 100%;
  width: 20%;
  border-bottom-left-radius: 16px;
  border-top-left-radius: 16px;
  background-color: #6a994e;
  align-items: center;
  justify-content: center;
}

.check-box {
  height: 30px;
  width: 30px;
  border-width: 2px;
  border-color: white;
  border-radius: 6px;
}
</style>