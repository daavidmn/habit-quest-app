<template>
  <ImageBackground
    class="container-image"
    :source="require('../assets/img/bg/bg-passe.png')"
    resizeMode="cover"
    :styles="{ flex: 1 }"
  >
    <view class="container">
      <ImageBackground
        class="paper-container"
        :source="require('../assets/img/bg/paper.png')"
        resizeMode="stretch"
        :styles="{ flex: 1 }"
      >
        <text class="text-title">Quest semanal</text>
        <text class="text-subtitle"
          >Por manter seus hábitos durante essa semana, você irá receber:</text
        >
        <view class="week-carousel">
          <!-- ESPAÇO PROS DIAS DA SEMANA -->
        </view>
        <text class="text-subtitle2" :style="{ alignSelf: 'flex-end' }"
          >Continue assim até o final dessa semana e receba um bônus especial de
          2 a mais por cada dia!</text
        >
      </ImageBackground>

      <view class="passe-container">
        <text class="text-title2" :style="{ color: 'white' }"
          >Passe de <text :style="{ color: '#6A994E' }">Primavera</text></text
        >
        <text class="text-subtitle3" :style="{ color: 'white' }"
          >Apenas
          <text :style="{ color: '#6A994E' }">28 dias até o fim!</text></text
        >
        <view class="prize-carousel">
          <!-- ESPAÇO DO CARROSEL DE PREMIAÇÃO -->
        </view>
        <text class="text-title3">Quer ter acesso a mais recompensas?</text>
        <text class="text-subtitle4"
          >Torne-se um apoiador, tenha acesso a recompensas exclusivas e ainda
          apoie o desenvolvimento desse app!
        </text>
        <touchable-opacity class="botao-apoiador">
          <text class="text-apoiador">Sim, quero me tornar um apoiador</text>
        </touchable-opacity>
      </view>
    </view>
  </ImageBackground>
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
.container-image {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  /* background-image: url("../assets/icon.png"); */
}
.container {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.18);
  padding-right: 16px;
  padding-left: 16px;
  padding-top: 5px;
  align-items: center;
}

.paper-container {
  height: 35%;
  width: 110%;
  padding: 15px;
  display: flex;
}
.text-title {
  height: 15%;
  font-size: 18px;
  font-style: normal;
  font-weight: bold;
}

.text-subtitle {
  height: 15%;
  font-size: 11px;
  font-style: normal;
  /* font-weight: bold; */
}

.text-subtitle2 {
  height: 20%;
  font-size: 12px;
  font-style: normal;
  /* font-weight: bold; */
}

.week-carousel {
  margin-top: 10;
  margin-bottom: 10;
  height: 30%;
}

.passe-container {
  width: 100%;
  height: 65%;
  padding-top: 10px;
}
.text-title2 {
  height: 10%;
  font-size: 18px;
  font-style: normal;
  font-weight: bold;
  /* background-color: red; */
}
.text-subtitle3 {
  height: 10%;
  font-size: 14px;
  font-style: normal;
  /* font-weight: bold; */
}
.prize-carousel {
  height: 30%;
  margin-top: 10;
  margin-bottom: 10;
}
.text-title3 {
  height: 5%;
  font-size: 12px;
  font-style: normal;
  font-weight: bold;
}
.text-subtitle4 {
  height: 10%;
  font-size: 10px;
  font-style: normal;
  /* font-weight: bold; */
}

.botao-apoiador {
  height: 45px;
  width: 100%;
  margin-top: 30px;
  border-radius: 8px;
  background-color: #386641;
  align-items: center;
  justify-content: center;
}

.text-apoiador {
  font-size: 12px;
  font-weight: bold;
  color: white;
}
</style>