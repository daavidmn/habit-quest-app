<template>
  <view class="container">
    <view v-if="active" class="imagem-container">
      <image class="imagem" :source="teste[1].src" />
    </view>
    <view v-else class="imagem-container">
      <image
        class="imagem"
        :source="require('../assets/img/avatar/001-superhero-b.png')"
      />
    </view>
  </view>
</template>

<script>
import { constAvatar } from "../consts/avatar";
export default {
  props: ["avatarid", "active"],
  data() {
    return {
      teste: constAvatar,
    };
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
}
.imagem-container {
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
}
.imagem {
  width: 80%;
  height: 80%;
}
</style>