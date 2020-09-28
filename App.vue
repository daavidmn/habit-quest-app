<template>
  <app-navigator class="app"></app-navigator>
</template>

<script>
console.disableYellowBox = true;
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
} from "vue-native-router";

import pgInicio from "./src/pages/inicio.vue";
import pgCadastroHabito from "./src/pages/cadastroHabito.vue";
import pgColecao from "./src/pages/colecao.vue";
import pgAmigos from "./src/pages/amigos.vue";
import pgPasse from "./src/pages/passe.vue";
import pgConfig from "./src/pages/config.vue";
import pgModificarHabito from "./src/pages/modificarHabito.vue";
import pgModificarAvatar from "./src/pages/modificarAvatar.vue";
import pgConquistas from "./src/pages/conquistas.vue";
import React from "react";
import {
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
import { StatusBar } from "react-native";
import { Asset } from "expo-asset";

const BottomTabNavigator = createBottomTabNavigator(
  {
    inicio: {
      screen: pgInicio,
      navigationOptions: {
        title: "Início",
        // tabBarIcon: ({ focused, tintColor }) => {
        //   //const iconName = `md-trophy${focused ? '' : '-outline'}`;
        //   const iconName = `md-trophy${focused ? '' : '-outline'}`;
        //   return <Ionicons name={iconName} size={25} color={tintColor} />;
        // },
        tabBarIcon: () => {
          return <Ionicons name={`md-home`} size={25} color={"#fff"} />;
        },
      },
    },
    colecao: {
      screen: pgColecao,
      navigationOptions: {
        title: "Coleção",
        tabBarIcon: () => {
          return <Ionicons name={`md-trophy`} size={25} color={"#fff"} />;
        },
      },
    },
    amigos: {
      screen: pgAmigos,
      navigationOptions: {
        title: "Amigos",
        tabBarIcon: () => {
          return <Ionicons name={`ios-happy`} size={25} color={"#fff"} />;
        },
      },
    },
    passe: {
      screen: pgPasse,
      navigationOptions: {
        title: "Passe",
        tabBarIcon: () => {
          return <MaterialCommunityIcons name="crown" size={25} color="#fff" />; //<Ionicons name={`md-map`} size={25} color={"#fff"} />;
        },
      },
    },
    config: {
      screen: pgConfig,
      navigationOptions: {
        title: "Config.",
        tabBarIcon: () => {
          return <Ionicons name={`md-settings`} size={25} color={"#fff"} />;
        },
      },
    },
  },
  {
    navigationOptions: {
      headerStyle: {
        height: 0,
        backgroundColor: "#6A994E",
      },
    },
    initialRouteName: "inicio",
    tabBarOptions: {
      activeTintColor: "#fff",
      activeBackgroundColor: "#386641",
      inactiveTintColor: "#fff",
      inactiveBackgroundColor: "#6A994E",
      labelStyle: {
        fontSize: 11,
      },
      style: {
        height: 70,
        margin: 0,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        backgroundColor: "#6A994E",
      },
      tabStyle: {
        margin: 10,
        padding: 2,
        borderRadius: 6,
      },
    },
  }
);

const StackNavigator = createStackNavigator(
  {
    AndroidTabs: BottomTabNavigator,
    cadastroHabito: {
      screen: pgCadastroHabito,
      navigationOptions: {
        title: "Criar Hábito",
      },
    },
    modificarHabito: {
      screen: pgModificarHabito,
      navigationOptions: {
        title: "Modificar Hábito",
      },
    },
    inicio: {
      screen: pgInicio,
      navigationOptions: {
        title: "Início",
      },
    },
    modificarAvatar: {
      screen: pgModificarAvatar,
      navigationOptions: {
        title: "Modificar Avatar",
      },
    },

    conquistas: {
      screen: pgConquistas,
      navigationOptions: {
        title: "Conquistas obtidas",
      },
    },
  },

  {
    initialRouteName: "AndroidTabs",
  }
);

const AppNavigator = createAppContainer(StackNavigator);

export default {
  components: { AppNavigator },
  created() {
    console.log("======");
    console.log(StatusBar.currentHeight);
    console.log("======");
    // async function loadResourcesAsync() {
    //   await Promise.all([
    //     Asset.loadAsync([require("./src/assets/img/bg/bg-passe.png")]),
    //     Asset.loadAsync([require("./src/assets/img/bg/paper.png")]),
    //     // Font.loadAsync({
    //     //   // This is the font that we are using for our tab bar
    //     //   ...Ionicons.font,
    //     //   // We include SpaceMono because we use it in HomeScreen.js. Feel free to
    //     //   // remove this if you are not using it in your app
    //     //   'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    //     //   'open-sans-extrabold': require('./assets/fonts/OpenSans-ExtraBold.ttf'),
    //     // }),
    //   ]);
    //   alert("sasa");
    // }
    // loadResourcesAsync();
  },
};
</script>

<style>
.app {
  align-items: center;
  justify-content: center;
  flex: 1;
}
</style>
