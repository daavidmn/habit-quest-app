<template>
  <view class="habit-box">
    <view class="check-container">
      <view class="check-box"></view>
    </view>
    <view class="texts">
      <view class="above-text">
        <view class="description">
          <text class="title">{{ title }}</text>
          <text>+{{ xp }}xp</text>
        </view>
      </view>
      <view class="below-text">
        <view>
          <text>seg ter qua qui sex</text>
        </view>
      </view>
    </view>
    <view class="sequence">
      <text>fogo</text>
    </view>
  </view>
</template>

<script>
export default {
  props: ["title", "xp"],
};
</script>

<style scoped>
.habit-box {
  margin-bottom: 10px;
  width: 100%;
  height: 82px;
  background-color: #f0f0f0;
  border-radius: 16px;
  flex-direction: row;
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

.texts {
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.description {
  flex-direction: row;
}

.title {
  margin-right: 10px;
}

.sequence {
  justify-content: center;
}
</style>