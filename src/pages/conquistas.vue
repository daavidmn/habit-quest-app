<template>
  <view class="container">
    <view class="green-bar">
      <view class="gb-esquerda">
        <text class="esquerda-cima">Seu progresso de conquistas</text>
        <text class="esquerda-baixo">15/20 (75%)</text>
      </view>

      <view class="gb-direita">
        <text class="direita-all">% entre</text>
        <text class="direita-all">todos os jogadores</text>
      </view>
    </view>

    <ScrollView :fadingEdgeLength="0" :showsVerticalScrollIndicator="false">
        <view class = "destaques">
    <view class = "card">
    <view class="card-conquistas">
        <view class="medal-mini">
          <image
            :style="{ width: 50, height: 50 }"
            :source="require('../assets/img/avatar/medalha-ouro.png')"
          />
        </view>
      <view class= "textbox">
      <text class= "conquista-name"> Destemido Ouro
      </text>
      <view class= "boxprogress">
          <view class = "conquistas"> 
            <text class="text-int"> Participou de 5 expedições </text>
          </view>  
          </view>
      </view>
      <text class = "porcentagem"> 
          0,05%
      </text>
      </view>
    </view>

     <view class = "card">
    <view class="card-conquistas">
        <view class="medal-mini">
          <image
            :style="{ width: 50, height: 50 }"
            :source="require('../assets/img/avatar/medalha-ouro.png')"
          />
        </view>
      <view class= "textbox">
      <text class= "conquista-name"> Popular Ouro
      </text>
      <view class= "boxprogress">
          <view class = "conquistas"> 
            <text class="text-int"> Possua mais de 30 amigos</text>
          </view>  
          </view>
      </view>
      <text class = "porcentagem"> 
          2,5%
      </text>
      </view>
    </view>

      <view class = "card">
    <view class="card-conquistas">
        <view class="medal-mini">
          <image
            :style="{ width: 50, height: 50 }"
            :source="require('../assets/img/avatar/medalha-bronze.png')"
          />
        </view>
      <view class= "textbox">
      <text class= "conquista-name"> Mestre Bronze
      </text>
      <view class= "boxprogress">
          <view class = "conquistas"> 
            <text class="text-int"> Praticou um hábito 25 vezes </text>
          </view>  
          </view>
      </view>
      <text class = "porcentagem"> 
          40,8%
      </text>
      </view>
    </view>

      <view class = "card">
    <view class="card-conquistas">
        <view class="medal-mini">
          <image
            :style="{ width: 50, height: 50 }"
            :source="require('../assets/img/avatar/medalha-prata.png')"
          />
        </view>
      <view class= "textbox">
      <text class= "conquista-name"> Em chamas Prata
      </text>
      <view class= "boxprogress">
          <view class = "conquistas"> 
            <text class="text-int"> Manteve um hábito por 10 dias </text>
          </view>  
          </view>
      </view>
      <text class = "porcentagem"> 
          21,4%
      </text>
      </view>
    </view>
        </view>
      <view class = "card">
    <view class="card-conquistas">
        <view class="medal-mini">
          <image
            :style="{ width: 50, height: 50 }"
            :source="require('../assets/img/avatar/medalha-prata.png')"
          />
        </view>
      <view class= "textbox">
      <text class= "conquista-name"> Destemido Prata
      </text>
      <view class= "boxprogress">
          <view class = "conquistas"> 
            <text class="text-int"> Participou de 3 expedições </text>
          </view>  
          </view>
      </view>
      <text class = "porcentagem"> 
          28,1%
      </text>
      </view>
    </view>

      <view class = "card">
    <view class="card-conquistas">
        <view class="medal-mini">
          <image
            :style="{ width: 50, height: 50 }"
            :source="require('../assets/img/avatar/medalha-prata.png')"
          />
        </view>
      <view class= "textbox">
      <text class= "conquista-name"> Popular Prata
      </text>
      <view class= "boxprogress">
          <view class = "conquistas"> 
            <text class="text-int"> Possua mais de 20 amigos </text>
          </view>  
          </view>
      </view>
      <text class = "porcentagem"> 
         31,5%
      </text>
      </view>
    </view>

      <view class = "card">
    <view class="card-conquistas">
        <view class="medal-mini">
          <image
            :style="{ width: 50, height: 50 }"
            :source="require('../assets/img/avatar/medalha-bronze.png')"
          />
        </view>
      <view class= "textbox">
      <text class= "conquista-name"> Em chamas Bronze
      </text>
      <view class= "boxprogress">
          <view class = "conquistas"> 
            <text class="text-int"> Manteve o hábito por 5 dias </text>
          </view>  
          </view>
      </view>
      <text class = "porcentagem"> 
          60,2%
      </text>
      </view>
    </view>

      <view class = "card">
    <view class="card-conquistas">
        <view class="medal-mini">
          <image
            :style="{ width: 50, height: 50 }"
            :source="require('../assets/img/avatar/medalha-bronze.png')"
          />
        </view>
      <view class= "textbox">
      <text class= "conquista-name"> Destemido Bronze
      </text>
      <view class= "boxprogress">
          <view class = "conquistas"> 
            <text class="text-int"> Fez sua primeira expedição </text>
          </view>  
          </view>
      </view>
      <text class = "porcentagem"> 
          90%
      </text>
      </view>
    </view>
  </view>
</template>

<script>
import { constUser } from "../consts/user";
import { constAvatar } from "../consts/avatar";
import { AsyncStorage } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default {
  components: {
    AntDesign,
    MaterialCommunityIcons,
  },
  data() {
    return {
      loaded: false,
      avatar: constAvatar,
      user: constUser,
      modalLevelVisible: false,
    };
  },

  props: {
    navigation: {
      type: Object,
    },
  },
};
</script>

<style>
.container {
  width: 100%;
  height: 100%;
  padding-right: 16px;
  padding-left: 16px;
  padding-top: 20px;
  background-color: #e8e8e8;
}

.green-bar {
  width: 100%;
  height: 300px;
  background-color: #6a994e;
  border-radius: 8px;
  height: 55px;
  padding-top: 8px;
  padding-left: 16px;
  margin-bottom: 18px;
  flex-direction: row;
}

.gb-esquerda {
  flex-direction: column;
}

.esquerda-cima {
  font-size: 14px;
  color: white;
}

.esquerda-baixo {
  font-size: 12px;
  color: white;
}
.gb-direita {
  flex-direction: column;
  align-items: flex-end;
}

.direita-all {
  font-size: 12px;
  color: white;
  top: 2px;
}

.destaques {
  height: 52%;
  width: 100%;
  border-color: #6a994e;
  border-width: 2;
  border-radius: 8;
  flex-direction: column;
  align-items: center;
  display: flex;
}

.card {
  width: 93%;
  flex-direction: row;
  align-items: center;
  padding-top: 8px;
  align-self: center;
}

.medal-mini {
  align-items: center;
  justify-content: center;
  width: 20%;
}
.card-conquistas {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  width: 100%;
  height: 76px;
  left: 0px;
  background-color: #f0f0f0;
  border-radius: 8px;
  align-self: flex-start;
  flex-grow: 0;
  padding-left: 16px;
  padding-right: 16px;
  justify-content: space-between;
}

.text-box {
  flex-direction: column;
}
.conquista-name {
  width: 100%;
  height: 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #111111;
  align-self: flex-start;
}
.conquistas {
  flex-direction: row;
}

.text-int {
  font-size: 11px;
}

.porcentagem {
  font-weight: bold;
  font-size: 16px;
}
</style>