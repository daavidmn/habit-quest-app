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

import pgInicio from "./pages/inicio.vue";
import pgCadastroHabito from "./pages/cadastroHabito.vue";
import pgColecao from "./pages/colecao.vue";
import pgAmigos from "./pages/amigos.vue";
import pgExpedicao from "./pages/expedicao.vue";
import pgConfig from "./pages/config.vue";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
    expedicao: {
      screen: pgExpedicao,
      navigationOptions: {
        title: "Expedição",
        tabBarIcon: () => {
          return <Ionicons name={`md-map`} size={25} color={"#fff"} />;
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
    },
  },
  {
    initialRouteName: "AndroidTabs",
  }
);

const AppNavigator = createAppContainer(StackNavigator);

export default {
  components: { AppNavigator },
  MaterialCommunityIcons,
};
</script>

<style>
.app {
  background-color: white;
  align-items: center;
  justify-content: center;
  flex: 1;
}
</style>
