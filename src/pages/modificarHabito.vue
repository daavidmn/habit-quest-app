<template>
  <view class="container">
    <text :style="{ fontSize: 18 }">Nome do Habito</text>
    <text-input
      :style="{
        height: 40,
        padding: 10,
        width: '100%',
        borderColor: '#6A994E',
        borderWidth: 2,
        borderRadius: 8,
      }"
      v-model="nomeHabito"
    />
    <text :style="{ fontSize: 18, marginTop: 30 }">Dias de prática</text>
    <text :style="{ fontSize: 12 }"
      >Alterar os dias irá zerar sua sequência atual nesse hábito.</text
    >

    <touchable-opacity class="botao-adicionar-habito" :on-press="modalDia">
      <text :style="{ fontSize: 24, color: 'white' }">+</text>
    </touchable-opacity>

    <view class="scroll-area">
      <ScrollView :fadingEdgeLength="0" :showsVerticalScrollIndicator="false">
        <view class="scroll-box">
          <view v-if="habito">
            <view v-for="(habit, key) in habito.rotinaSemanal" :key="key">
              <HabitScreenBox @remove-rotina="() => removerRotina(key)"
                :dia="habit.diaSetado"
                :hora="habit.horaSetada"
                :minuto="habit.minutoSetado"
                :rotinaId="key"
              />
            </view>
          </view>
        </view>
      </ScrollView>
    </view>

    <touchable-opacity
      class="confirmar-habito"
      :on-press="() => definirHabito()"
    >
      <text class="confirmar-estilo">Confirmar</text>
    </touchable-opacity>

    <touchable-opacity
      class="remover-habito"
      :on-press="() => removerHabito()"
    >
      <text class="confirmar-estilo">Remover</text>
    </touchable-opacity>

    <view class="centered-view">
      <modal
        animationType="slide"
        :transparent="true"
        :visible="modalDiaVisible"
      >
        <view class="centered-view2">
          <view class="modal-view">
            <text :style="{ fontSize: 24 }">Dia da Semana</text>
            <view class="line" />
            <touchable-opacity
              class="adicionarDia"
              :on-press="() => definirDia(0)"
            >
              <text>Domingo</text>
            </touchable-opacity>
            <view class="line" />
            <touchable-opacity
              class="adicionarDia"
              :on-press="() => definirDia(1)"
            >
              <text>Segunda-feira</text>
            </touchable-opacity>
            <view class="line" />
            <touchable-opacity
              class="adicionarDia"
              :on-press="() => definirDia(2)"
            >
              <text>Terça-feira</text>
            </touchable-opacity>
            <view class="line" />
            <touchable-opacity
              class="adicionarDia"
              :on-press="() => definirDia(3)"
            >
              <text>Quarta-feira</text>
            </touchable-opacity>
            <view class="line" />
            <touchable-opacity
              class="adicionarDia"
              :on-press="() => definirDia(4)"
            >
              <text>Quinta-feira</text>
            </touchable-opacity>
            <view class="line" />
            <touchable-opacity
              class="adicionarDia"
              :on-press="() => definirDia(5)"
            >
              <text>Sexta-feira</text>
            </touchable-opacity>
            <view class="line" />
            <touchable-opacity
              class="adicionarDia"
              :on-press="() => definirDia(6)"
            >
              <text>Sábado</text>
            </touchable-opacity>
            <view class="line" />
          </view>
        </view>
      </modal>

      <modal
        animationType="slide"
        :transparent="true"
        :visible="modalHoraVisible"
      >
        <view class="centered-view3">
          <view class="modal-view">
            <text :style="{ fontSize: 22 }">Horário</text>
            <view class="box-horario">
              <text-input
                keyboardType="numeric"
                :maxLength="2"
                :style="{
                  height: 60,
                  width: '30%',
                  borderColor: '#6A994E',
                  borderWidth: 1,
                  borderRadius: 8,
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 30,
                }"
                v-model="horaTemp"
              />
              <text :style="{ fontSize: 30, fontWeight: 'bold' }">:</text>
              <text-input
                keyboardType="numeric"
                :maxLength="2"
                :style="{
                  height: 60,
                  width: '30%',
                  borderColor: '#6A994E',
                  borderWidth: 1,
                  borderRadius: 8,
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 30,
                }"
                v-model="minutoTemp"
              />
            </view>

            <touchable-opacity
              class="adicionarRotina"
              :on-press="() => definirHora()"
            >
              <text :style="{ fontSize: 16, color: 'white' }">Pronto</text>
            </touchable-opacity>
          </view>
        </view>
      </modal>
    </view>
  </view>
</template>

<script>
import { constUser } from "../consts/user";
import { constHabitos } from "../consts/habitos";
import { AsyncStorage } from "react-native";
import { Alert } from "react-native";
import HabitScreenBox from "../components/HabitScreenBox";

export default {
  components: {
    HabitScreenBox,
  },
  props: {
    navigation: {
      type: Object,
    },
  },
  data() {
    return {
      habito: "",
      nomeHabito:"",
      user: constUser,
      modalDiaVisible: false,
      modalHoraVisible: false,
      diaTemp: "",
      horaTemp: "",
      minutoTemp: "",
      usuarioId: "",
      habitoId: "",
      salvarUsuario: "",
    };
  },
  computed: {
    userr() {
      return this.$store.state.storeUsuario;
    },
    habitoSelecionado() {
      return this.$store.state.storeHabitoSelecionado;
    },
  },
  created() {

    this.$store.dispatch("fetchUsuario");

    this.nomeHabito = this.userr[0].habitos[this.habitoSelecionado].titulo;

    this.habito = this.userr[0].habitos[this.habitoSelecionado];

  },
  watch: {
    horaTemp: function () {
      // this.horaTemp = parseInt(this.horaTemp);
      if (this.horaTemp > 23) {
        this.horaTemp = 23;
      }
      if (this.horaTemp < 0) {
        this.horaTemp = 0;
      }
    },
    minutoTemp: function () {
      // this.horaTemp = parseInt(this.horaTemp);
      if (this.minutoTemp > 59) {
        this.minutoTemp = 59;
      }
      if (this.minutoTemp < 0) {
        this.minutoTemp = 0;
      }
    },
  },
  methods: {

    removerRotina: function (id){

      this.habito.rotinaSemanal.splice(id,1);

    },

    removerHabito: function (){


Alert.alert(
        "Remoção de Habito",
        "Você tem certeza que deseja remover este Habito?",
        [
          {
            text: "Cancelar",
            onPress: () => console.log("Cancelar"),
            style: "cancel",
          },
          {
            text: "Confirmar",
            onPress: () => {
      let copiaUser=this.userr;

      if((this.habitoSelecionado+1) == (copiaUser[0].habitos.length)){copiaUser[0].habitos.pop(); }

      else{copiaUser[0].habitos.splice(this.habitoSelecionado,1);}
      
      this.$store.commit('setSalvarUsuario', copiaUser);

      this.$store.dispatch('salvarUsuario');

      this.$store.dispatch("fetchUsuario");

        Alert.alert(
        "Remoção de Habito",
        "Habito Removido.",
        [
          {
            text: "Ok",
            onPress: () => {this.navigation.navigate("inicio");},
           },
          
        ],
        { cancelable: true }
      );
            },
          },
        ],
        { cancelable: true }
      );

      

    },
    modalDia() {
      this.modalDiaVisible = true;
    },
    definirDia(dia) {
      this.modalDiaVisible = false;
      this.modalHoraVisible = true;
      this.diaTemp = dia;
    },
    definirHora() {
      this.modalHoraVisible = false;

      if (this.horaTemp == "" || this.minutoTemp == "") {
        Alert.alert(
          "Valor Invalido",
          "Adicione valores validos para o habito",
          [{ text: "OK", onPress: () => console.log("OK Pressed") }],
          { cancelable: false }
        );
      } else {
        this.habito.rotinaSemanal.push({
          diaSetado: this.diaTemp,
          horaSetada: this.horaTemp,
          minutoSetado: this.minutoTemp,
          notificar: false,
          completado: false,
        });
      }
    },
    definirHabito() {
      if (this.habito.rotinaSemanal == "") {
        Alert.alert(
          "Você não cadastrou dias para seu habito",
          "Adicione um dia e horario para seu habito",
          [{ text: "OK", onPress: () => console.log("OK Pressed") }],
          { cancelable: false }
        );
      } else {

        this.diaTemp = "";
        this.horaTemp = "";
        this.minutoTemp = "";

        this.userr[0].habitos[this.habitoSelecionado] = this.habito;
        this.userr[0].habitos[this.habitoSelecionado].titulo = this.nomeHabito;

        this.$store.commit('setSalvarUsuario', this.userr);

        this.$store.dispatch('salvarUsuario');

        this.$store.dispatch("fetchUsuario");

        Alert.alert(
        "Atualização de Habito",
        "Habito Atualizado.",
        [
          {
            text: "Ok",
            onPress: () => {this.navigation.navigate("inicio");},
           },
          
        ],
        { cancelable: true }
      );
        
      }
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  height: 100%;
}

.botao-adicionar-habito {
  margin-top: 20px;
  width: 100%;
  height: 50px;
  border-radius: 8px;
  background-color: #386641;
  color: white;
  align-items: center;
  justify-content: center;
}

.scroll-area {
  padding-left: 15px;
  padding-right: 15px;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 345px;
}

.confirmar-habito {
  position: absolute;
  left: 20px;
  bottom: 30px;
  width: 50%;
  height: 80px;
  align-items: center;
  justify-content: center;
  background-color: #386641;
  border-radius: 8px;
}
.remover-habito {
  position: absolute;
  right: 20px;
  bottom: 30px;
  width: 50%;
  height: 80px;
  align-items: center;
  justify-content: center;
  background-color: red;
  border-radius: 8px;
}
.confirmar-estilo {
  color: white;
  font-size: 22px;
}

.botao-visual {
  width: 50px;
  height: 50px;
  background-color: #386641;
}

.centered-view {
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 22;
}

.centered-view2 {
  background-color: rgba(0, 0, 0, 0.8);
  flex: 1;
  justify-content: center;
  align-items: center;
}

.centered-view3 {
  background-color: rgba(0, 0, 0, 0.8);
  flex: 1;
  justify-content: center;
  align-items: center;
}

.adicionarRotina {
  margin-top: 20px;
  width: 100%;
  height: 30px;
  align-items: center;
  justify-content: center;
  background-color: #386641;
  border-radius: 8px;
}

.modal-view {
  margin: 20;
  width: 300px;
  background-color: white;
  border-radius: 20;
  padding: 35;
  align-items: center;
}

.line {
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-width: 1;
}

.box-horario {
  margin-top: 20px;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
</style>