<template>
  <view class="container">
    <text class="titulo">Amigos</text>
    <view class="search-box">
      <AntDesign class="search-icon" name="search1" :size="24" color="black" />
      <text-input
        class="search-field"
        :maxLength="25"
        :placeholder="'Encontre novos amigos'"
        :style="{
          height: 40,
          padding: 10,
          borderColor: '#6A994E',
        }"
      />
    </view>
    <ScrollView :fadingEdgeLength="0" :showsVerticalScrollIndicator="false">
    <view class = "card">
      <view class="medal-mini">
          <image
            :style="{ width: 50, height: 50 }"
            :source="require('../assets/img/avatar/medalha-ouro.png')"
          />
          <text class= "podio"> 1
          </text>
        </view>
    <view class="card-amigo">
      <view class="avatar-mini">
        <image :style="{ width: 40, height: 40 }" :source="avatar[1].src" />
      </view>
      <view class= "textbox">
      <text class= "friend-name"> Josémildo Touro
      </text>
      <view class= "boxprogress">
          <view class = "conquistas"> 
            <MaterialCommunityIcons name="crown" :size="18" color="black" />
            <text class="text-int"> 250 </text>
          <text class="text-int"> Nivel 170 </text>
          </view>  
          </view>
      </view>
      </view>
    </view>

    <view class = "card">
      <view class="medal-mini">
          <image
            :style="{ width: 50, height: 50 }"
            :source="require('../assets/img/avatar/medalha-prata.png')"
          />
<text class= "podio"> 2
          </text>
        </view>
    <view class="card-amigo">
      <view class="avatar-mini">
        <image :style="{ width: 40, height: 40 }" :source="avatar[2].src" />
      </view>
      <view class= "textbox">
      <text class= "friend-name"> Hercules de Mauá
      </text>
      <view class= "boxprogress">
          <view class = "conquistas"> 
            <MaterialCommunityIcons name="crown" :size="18" color="black" />
            <text class="text-int"> 175 </text>
          <text class="text-int"> Nivel 282 </text>
          </view>  
          </view>
      </view>
      </view>
    </view>

    <view class = "card">
      <view class="medal-mini">
          <image
            :style="{ width: 50, height: 50 }"
            :source="require('../assets/img/avatar/medalha-bronze.png')"
          />
<text class= "podio"> 3
          </text>
        </view>
    <view class="card-amigo">
      <view class="avatar-mini">
        <image :style="{ width: 40, height: 40 }" :source="avatar[3].src" />
      </view>
      <view class= "textbox">
      <text class= "friend-name"> Banban da Quebrada
      </text>
      <view class= "boxprogress">
          <view class = "conquistas"> 
            <MaterialCommunityIcons name="crown" :size="18" color="black" />
            <text class="text-int"> 80 </text>
          <text class="text-int"> Nivel 240 </text>
          </view>  
          </view>
      </view>
      </view>
    </view>

    <view class = "card">
      <view class="medal-mini">
          <text class= "posicao"> 4
          </text>
        </view>
    <view class="card-amigo">
      <view class="avatar-mini">
        <image :style="{ width: 40, height: 40 }" :source="avatar[4].src" />
      </view>
      <view class= "textbox">
      <text class= "friend-name"> Zé Monstrão
      </text>
      <view class= "boxprogress">
          <view class = "conquistas"> 
            <MaterialCommunityIcons name="crown" :size="18" color="black" />
            <text class="text-int"> 15 </text>
          <text class="text-int"> Nivel 150 </text>
          </view>  
          </view>
      </view>
      </view>
    </view>

    <view class = "card">
      <view class="medal-mini">
         <text class= "posicao"> 5
          </text>
        </view>
    <view class="card-amigo">
      <view class="avatar-mini">
        <image :style="{ width: 40, height: 40 }" :source="avatar[5].src" />
      </view>
      <view class= "textbox">
      <text class= "friend-name"> Geraldinho Sibite
      </text>
      <view class= "boxprogress">
          <view class = "conquistas"> 
            <MaterialCommunityIcons name="crown" :size="18" color="black" />
            <text class="text-int"> 10 </text>
          <text class="text-int"> Nivel 200 </text>
          </view>  
          </view>
      </view>
      </view>
    </view>

    <view class = "card">
      <view class="medal-mini">
        <text class= "posicao"> 6
          </text>
        </view>
    <view class="card-amigo">
      <view class="avatar-mini">
        <image :style="{ width: 40, height: 40 }" :source="avatar[6].src" />
      </view>
      <view class= "textbox">
      <text class= "friend-name"> Trapézio Descendente
      </text>
      <view class= "boxprogress">
          <view class = "conquistas"> 
            <MaterialCommunityIcons name="crown" :size="18" color="black" />
            <text class="text-int"> 5 </text>
          <text class="text-int"> Nivel 12 </text>
          </view>  
          </view>
      </view>
      </view>
    </view>

    </ScrollView>
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
  methods: {
    goToPage() {
      this.navigation.navigate("expedicao", "teste");
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
.titulo {
  height: 38px;
  width: 189px;
  left: 0px;
  top: 0px;
  margin-bottom: 24px;
  border-radius: nullpx;
  font-size: 28px;
  font-style: normal;
  font-weight: bold;
  line-height: 38px;
  text-align: left;
}

.search-box {
  height: 40;
  width: 100%;
  border-color: #6a994e;
  border-width: 2;
  border-radius: 8;
  background-color: white;
  flex-direction: row;
  align-items: center;
  display: flex;
}

.search-icon {
  margin-left: 10;
}
.search-field {
  flex-grow: 1;
  font-size: 17px;
}

.card {
  width: 100%;
  flex-direction: row;
  align-items: center;
}

.medal-mini {
  align-items: center;
  justify-content: center;
  width: 20%;
}
.card-amigo {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  width: 80%;
  height: 76px;
  left: 0px;
  top: 0px;
  background-color: #f0f0f0;
  border-radius: 8px;
  align-self: flex-start;
  flex-grow: 0;
  padding-left: 16px;
  margin-top: 8px;
}

.avatar-mini {
  width: 20px;
  height: 20px;
  border-color: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  align-items: center;
  justify-content: center;
}
.podio {
  position: absolute;
  font-weight: bold;
  font-size: 16px;
  color: white;
  top: 26px;
}
.posicao {
  font-weight: bold;
  font-size: 24px;
}

.text-box {
  flex-direction: column;
}
.friend-name {
  width: 100%;
  height: 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #111111;
  align-self: flex-start;
  margin-left: 26px;
}
.conquistas {
  flex-direction: row;
  margin-left: 26px;
}

.text-int {
  margin-right: 8px;
}
</style>