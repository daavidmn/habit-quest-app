<template>
  <view class="container">
    <text :style="{fontSize: 18}">Nome do hábito</text>
    <text-input
      :style="{height: 40, padding:10, width: '100%', borderColor: '#6A994E', borderWidth: 2, borderRadius: 8}"
      v-model="nomeHabito"
    />
    <text :style="{fontSize: 18, marginTop: 30}">Dias de prática</text>
    <text :style="{fontSize: 12}">Alterar os dias irá zerar sua sequência atual nesse hábito.</text>

    <view class="botao-adicionar-habito">
      <touchable-opacity :on-press="modalDia">
        <text :style="{fontSize: 24, textAlign: 'center', textAlignVertical: 'center'}">+</text>
      </touchable-opacity>
    </view>

    <text>modal dia visivel: {{modalDiaVisible}}</text>
    <text>modal hora visivel: {{modalHoraVisible}}</text>
    <!-- <text>{{habitos[0].rotinaSemanal}}</text> -->

    <view v-for="(habit, key) in habitos[0].rotinaSemanal" :key="key">
      <HabitScreenBox :dia="habit.diaSetado" :hora="habit.horaSetada" :minuto="habit.minutoSetado" />
    </view>

    <view class="centered-view">
      <modal animationType="slide" :transparent="true" :visible="modalDiaVisible">
        <view class="centered-view2">
          <view class="modal-view">
            <text :style="{fontSize: 24}">Dia da Semana</text>
            <touchable-opacity class="adicionar" :on-press="() => definirDia(0)">
              <text>Domingo</text>
            </touchable-opacity>
            <touchable-opacity class="adicionar" :on-press="() => definirDia(1)">
              <text>Segunda-feira</text>
            </touchable-opacity>
            <touchable-opacity class="adicionar" :on-press="() => definirDia(2)">
              <text>Terça-feira</text>
            </touchable-opacity>
            <touchable-opacity class="adicionar" :on-press="() => definirDia(3)">
              <text>Quarta-feira</text>
            </touchable-opacity>
            <touchable-opacity class="adicionar" :on-press="() => definirDia(4)">
              <text>Quinta-feira</text>
            </touchable-opacity>
            <touchable-opacity class="adicionar" :on-press="() => definirDia(5)">
              <text>Sexta-feira</text>
            </touchable-opacity>
            <touchable-opacity class="adicionar" :on-press="() => definirDia(6)">
              <text>Sábado</text>
            </touchable-opacity>
          </view>
        </view>
      </modal>

      <modal animationType="slide" :transparent="true" :visible="modalHoraVisible">
        <view class="centered-view2">
          <view class="modal-view">
            <text :style="{fontSize: 24}">Horário</text>
            <text-input
              keyboardType="numeric"
              maxlength="2"
              :style="{height: 40, padding:10, width: '100%', borderColor: '#6A994E', borderWidth: 2, borderRadius: 8}"
              v-model="horaTemp"
            />
            <text-input
              keyboardType="numeric"
              maxlength="2"
              :style="{height: 40, padding:10, width: '100%', borderColor: '#6A994E', borderWidth: 2, borderRadius: 8}"
              v-model="minutoTemp"
            />
            <touchable-opacity class="adicionar" :on-press="() => definirHora()">
              <text>Sábado</text>
            </touchable-opacity>
          </view>
        </view>
      </modal>
    </view>
  </view>
</template>

<script>
import { constHabitos } from "../consts/habitos";
import HabitScreenBox from "../components/HabitScreenBox";
export default {
  components: {
    HabitScreenBox,
  },
  data() {
    return {
      habitos: "",
      nomeHabito: "",
      modalDiaVisible: false,
      modalHoraVisible: false,
      diaTemp: "",
      horaTemp: "",
      minutoTemp: "",
    };
  },
  created() {
    this.habitos = constHabitos;
  },
  methods: {
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
      this.habitos[0].rotinaSemanal.push({
        diaSetado: this.diaTemp,
        horaSetada: this.horaTemp,
        minutoSetado: this.minutoTemp,
        notificar: false,
        completado: false,
      });
      this.diaTemp = "";
      this.horaTemp = "";
      this.minutoTemp = "";
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
  margin-top: 22;
}

.modal-view {
  margin: 20;
  width: 300px;
  background-color: white;
  border-radius: 20;
  padding: 35;
  align-items: center;
}
</style>