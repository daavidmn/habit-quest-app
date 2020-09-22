<template>
  <view class="app">
    <view class="header">
      <view class="avatar-mini">
        <image
          :style="{width: 60, height: 60}"
          :source="require('../assets/img/avatar/020-superhero-19.png')"
        />
      </view>
      <view class="box-centro">
        <view class="box-cima">
          <text class="nome">Zé Monstrão</text>
        </view>
        <view class="box-baixo">
          <view class="box-esquerda">
            <text class="texto-baixo">Nível 150</text>
          </view>
          <view class="box-direita">
            <view class="achievements">
              <MaterialCommunityIcons name="crown" :size="24" color="white" />
              <text class="texto-baixo">Nível 15</text>
            </view>
          </view>
        </view>
      </view>
      <view class="box-lateral">
        <text class="texto-box-lateral">Desde:</text>
        <text class="texto-baixo">Fev. 2020</text>
      </view>
    </view>
    <view class="conteudo-meio">
      <text class="texto-centro">Conquistas Obtidas</text>
      <view class="conteudo-central-superior">
        <view class="conquistas">
          <text>Destemido</text>
          <text>Popular</text>
          <text>Mestre</text>
          <text>Quente</text>
        </view>
        <view class="ver-mais">
          <text class="ver-mais-texto">Ver + 8 conquistas</text>
        </view>
      </view>
      <text class="texto-centro">Estatísticas</text>
      <view class="estatisticas"></view>
    </view>
  </view>
</template>

<script>
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default {
  components: {
    MaterialCommunityIcons,
  },
  props: {
    navigation: {
      type: Object,
    },
  },
};
</script>


<style scoped>
.app {
  width: 100%;
  height: 100%;
}

.header {
  padding-left: 5px;
  padding-right: 5px;
  width: 100%;
  height: 20%;
  background-color: #6a994e;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
}

.box-centro {
  width: 50%;
}

.box-esquerda {
  padding-top: 5px;
  align-items: center;
}

.box-direita {
  align-items: center;
}

.box-baixo {
  justify-content: flex-start;
  flex-direction: row;
}

.nome {
  height: 38px;
  left: 0px;
  top: 0px;
  font-style: normal;
  font-weight: 800;
  font-size: 28px;
  line-height: 32px;
  display: flex;
  align-items: center;

  color: #ffffff;
}

.avatar-mini {
  width: 20%;
  height: 67px;
  background-color: #f2e8cf;
  border-color: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  align-items: center;
  justify-content: center;
}
.tasks {
  height: 32px;
  width: 50px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}
.tasks-text {
  color: white;
}
.achievements {
  align-items: center;
  flex-direction: row;
}

.texto-baixo {
  padding-right: 10px;
  color: white;
}

.box-lateral {
  width: 20%;
  align-content: center;
  flex-direction: column;
}

.texto-box-lateral {
  height: 32px;
  left: 0px;
  top: 0px;
  font-style: normal;
  font-size: 22px;
  line-height: 32px;
  display: flex;
  align-items: center;
  color: white;
}

.conteudo-meio {
  width: 100%;
  height: 100%;
  align-content: center;
  flex-direction: column;
}

.texto-centro {
  width: 100%;
  top: 0px;
  left: 16px;
  font-style: normal;
  font-size: 18px;
  line-height: 32px;
  align-items: center;
}

.conteudo-central-superior {
  flex-direction: column;
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  top: 0px;
}

.conquistas {
  height: 40%;
  flex-direction: row;
  background-color: #f0f0f0;
  border-color: #386641;
  border-width: 2px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.ver-mais {
  background-color: #386641;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}
.ver-mais-texto {
  width: 100%;
  height: 32px;
  line-height: 10px;
  top: 10px;
  left: 16px;
  font-style: normal;
  font-size: 10px;
  display: flex;
  color: white;
}

.estatisticas {
  height: 10%;
  width: 91%;
  left: 16px;
  flex-direction: row;
  background-color: #f0f0f0;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-color: #386641;
  border-width: 2px;
}
</style>