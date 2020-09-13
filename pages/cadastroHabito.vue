<template>
  <view class="container">
    <text>Nome do hábito</text>
    <text-input
      :style="{height: 40, width: 100, borderColor: 'gray', borderWidth: 1}"
      v-model="nomeHabito"
    />
    <text>Dias de prática</text>
    <text>Alterar os dias irá zerar sua sequência atual nesse hábito</text>
    <touchable-opacity class="adicionar" :on-press="modalDia">
      <view class="botao-visual">
        <text :style="{fontSize: 24}">+</text>
      </view>
    </touchable-opacity>
    <text>modal dia visivel: {{modalDiaVisible}}</text>
    <text>modal hora visivel: {{modalHoraVisible}}</text>

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
            <touchable-opacity class="adicionar" :on-press="() => definirHora(23)">
              <text>Sábado</text>
            </touchable-opacity>
          </view>
        </view>
      </modal>
    </view>
  </view>
</template>

<script>
export default {
  data: function () {
    return {
      nomeHabito: "",
      modalDiaVisible: false,
      modalHoraVisible: false,
    };
  },
  methods: {
    modalDia() {
      this.modalDiaVisible = true;
    },
    definirDia(dia) {
      this.modalDiaVisible = false;
      this.modalHoraVisible = true;
    },
    definirHora(hora) {
      this.modalHoraVisible = false;
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
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