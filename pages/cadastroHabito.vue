<template>
  <view class="container">
    <text :style="{fontSize: 18}">Nome do hábito</text>
    <text-input
      :style="{height: 40, padding:10, width: '100%', borderColor: '#6A994E', borderWidth: 2, borderRadius: 8}"
      v-model="nomeHabito"
    />
    <text :style="{fontSize: 18, marginTop: 30}">Dias de prática</text>
    <text :style="{fontSize: 12}">Alterar os dias irá zerar sua sequência atual nesse hábito.</text>

    <touchable-opacity class="botao-adicionar-habito" :on-press="modalDia">
      <text :style="{fontSize: 24, color: 'white'}">+</text>
    </touchable-opacity>

    <!-- <text>{{habitos}}</text>
    <text>{{rotinaSemanal}}</text>-->

    <!-- <text>modal dia visivel: {{modalDiaVisible}}</text> -->
    <!-- <text>modal hora visivel: {{modalHoraVisible}}</text> -->
    <!-- <text>{{habitos[0].rotinaSemanal}}</text> -->
    <view class="scroll-area">
      <ScrollView :fadingEdgeLength="0" :showsVerticalScrollIndicator="false">
        <view class="scroll-box">
          <view v-if="habitos.length > 0">
            <view v-for="(habit, key) in rotinaSemanal" :key="key">
              <HabitScreenBox
                :dia="habit.diaSetado"
                :hora="habit.horaSetada"
                :minuto="habit.minutoSetado"
              />
            </view>
          </view>
        </view>
      </ScrollView>
    </view>

    <touchable-opacity class="confirmar-habito" :on-press="() => definirHabito()">
      <text class="confirmar-estilo">Confirmar</text>
    </touchable-opacity>

    <view class="centered-view">
      <modal animationType="slide" :transparent="true" :visible="modalDiaVisible">
        <view class="centered-view2">
          <view class="modal-view">
            <text :style="{fontSize: 24}">Dia da Semana</text>
            <touchable-opacity class="adicionarDia" :on-press="() => definirDia(0)">
              <text>Domingo</text>
            </touchable-opacity>
            <touchable-opacity class="adicionarDia" :on-press="() => definirDia(1)">
              <text>Segunda-feira</text>
            </touchable-opacity>
            <touchable-opacity class="adicionarDia" :on-press="() => definirDia(2)">
              <text>Terça-feira</text>
            </touchable-opacity>
            <touchable-opacity class="adicionarDia" :on-press="() => definirDia(3)">
              <text>Quarta-feira</text>
            </touchable-opacity>
            <touchable-opacity class="adicionarDia" :on-press="() => definirDia(4)">
              <text>Quinta-feira</text>
            </touchable-opacity>
            <touchable-opacity class="adicionarDia" :on-press="() => definirDia(5)">
              <text>Sexta-feira</text>
            </touchable-opacity>
            <touchable-opacity class="adicionarDia" :on-press="() => definirDia(6)">
              <text>Sábado</text>
            </touchable-opacity>
          </view>
        </view>
      </modal>

      <modal animationType="slide" :transparent="true" :visible="modalHoraVisible">
        <view class="centered-view3">
          <view class="modal-view">
            <text :style="{fontSize: 22}">Horário</text>
            <view class="box-horario">
              <text-input
                keyboardType="numeric"
                :maxLength="2"
                :style="{height: 60, width: '30%', borderColor: '#6A994E', borderWidth: 1, borderRadius: 8, textAlign: 'center', fontWeight: 'bold', fontSize: 30}"
                v-model="horaTemp"
              />
              <text :style="{fontSize: 30, fontWeight: 'bold'}">:</text>
              <text-input
                keyboardType="numeric"
                :maxLength="2"
                :style="{height: 60, width: '30%', borderColor: '#6A994E', borderWidth: 1, borderRadius: 8, textAlign: 'center', fontWeight: 'bold', fontSize: 30}"
                v-model="minutoTemp"
              />
            </view>
            <!-- <text>{{horaTemp}}</text> -->
            <touchable-opacity class="adicionarRotina" :on-press="() => definirHora()">
              <text :style="{fontSize: 16, color: 'white'}">Pronto</text>
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
      user: "",
      habitos: "",
      rotinaSemanal: [],
      nomeHabito: "",
      modalDiaVisible: false,
      modalHoraVisible: false,
      diaTemp: "",
      horaTemp: "",
      minutoTemp: "",
      usuarioId:"",
      habitoId:"",
      salvarUsuario:"",
    };
  },
  created() {
      console.log("------------Inicializando Informações-------------");
      console.log(" ");
      console.log(" ");


    AsyncStorage.setItem('Habitos', JSON.stringify(constHabitos)).then(() =>{
      console.log("ENVIADO:"+JSON.stringify((constHabitos)));
    } )
    .catch( ()=> { console.log('There was an error saving the product')})

    AsyncStorage.getItem('Habitos').then((habitosSalvos) =>{
      const habitosParsed = JSON.parse(habitosSalvos);
      if (habitosParsed){
        this.habitos = habitosParsed;
        console.log(" ");
        console.log("RECEBIDO: "+habitosSalvos);
        console.log(" ");
        console.log("Habitos: "+habitosParsed);
        console.log(" ");
      } else{
        this.habitos = [];
        console.log("Nada Recebido");
      }
    }).catch(()=>{console.log("Deu errado no Recebimento");})

    this.habitos = constHabitos;
    this.habitos = []; //inicializar zerado na pagina


    this.habitoId = 0;

    AsyncStorage.getItem("Usuario")
      .then((usuarioSalvo) => {
        const usuarioParsed = JSON.parse(usuarioSalvo);
        if (usuarioParsed) {
          this.user = usuarioParsed;
          this.habitos = this.user[0].habitos[this.habitoId];
          this.rotinaSemanal = this.habitos.rotinaSemanal;

          console.log(" ");
          console.log("RECEBIDO USUARIO: " + usuarioSalvo);
          console.log(" ");
          console.log("Usuario: " + this.user[0].nome);
          console.log(" ");
          console.log("Habito: " + this.habitos.titulo);
          console.log(" ");
          console.log("Rotina Semanal: " + JSON.stringify(this.rotinaSemanal));
          console.log(" ");

        } else {
          console.log(" ");
          console.log("USUARIO NÃO RECEBIDO");
          this.user = constUser;
          this.habitos = this.user[0].habitos[this.habitoId];
          this.rotinaSemanal = this.habitos.rotinaSemanal;
          console.log(" ");
          console.log("Usuario: " + this.user[0].nome);
          console.log(" ");
          console.log("Habito: " + this.habitos.titulo);
          console.log(" ");
          console.log("Rotina Semanal: " + JSON.stringify(this.rotinaSemanal));
          console.log(" ");
        }
      })
      .catch(() => {
        console.log(" ");
        console.log("Deu errado no Recebimento de Usuario");
        console.log(" ");
      });



    //this.habitos = constHabitos;
   // this.habitos = []; //inicializar zerado na pagina

    AsyncStorage.setItem("Habitos", JSON.stringify(constHabitos))
      .then(() => {
        console.log("ENVIADO:" + JSON.stringify(constHabitos));
      })
      .catch(() => {
        console.log("There was an error saving the product");
      });

    AsyncStorage.getItem("Habitos")
      .then((habitosSalvos) => {
        const habitosParsed = JSON.parse(habitosSalvos);
        if (habitosParsed) {
          this.habitos = habitosParsed;
          console.log(" ");
          console.log("RECEBIDO: " + habitosSalvos);
          console.log(" ");
          console.log("Habitos: " + habitosParsed);
          console.log(" ");
        } else {
          this.habitos = [];
          console.log("Nada Recebido");
        }
      })
      .catch(() => {
        console.log("Deu errado no Recebimento");
      });

    this.habitos = constHabitos;
    this.habitos = []; //inicializar zerado na pagina

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

      console.log("------------Inicio Teste Rotina Semanal-------------");
      console.log(" ");
      console.log(" ");
      console.log("Antiga Rotina Semanal do habito: "+this.habitos.titulo);
      console.log(JSON.stringify(this.habitos.rotinaSemanal));
      console.log(" ");
      console.log(" ");

      this.rotinaSemanal.push({
        diaSetado: this.diaTemp,
        horaSetada: this.horaTemp,
        minutoSetado: this.minutoTemp,
        notificar: false,
        completado: false,
      });
      
      this.habitos.rotinaSemanal=this.rotinaSemanal;

      console.log("Nova Rotina Semanal do habito: "+this.habitos.titulo);
      console.log(JSON.stringify(this.habitos.rotinaSemanal));
      console.log(" ");
      console.log(" ");
      console.log("------------Fim Teste Rotina Semanal-------------");

      console.log(" ");
      console.log(" ");
      console.log(" ");

      console.log("------------Inicio Teste Novos habitos-------------");
      console.log(" ");
      console.log(" ");

      this.user[0].habitos[this.habitoId]=this.habitos;

      console.log("INFORMAÇÕES DO USUARIO: "+JSON.stringify(this.user[0]));

      console.log(" ");
      console.log(" ");
      console.log("------------Fim Teste Novos habitos-------------");

      console.log(" ");
      console.log(" ");

      this.salvarUsuario = JSON.stringify(this.user);

      console.log("------------Inicio Atualizar Usuario-------------");
      AsyncStorage.setItem("Usuario",this.salvarUsuario).then(()=>{
        console.log(" ");
        console.log(" ");
        console.log("Usuario: "+this.salvarUsuario);
        console.log(" ");
        console.log(" ");
        console.log("Usuário Atualizado");
      })
      .catch(()=>{
        console.log(" ");
        console.log(" ");
        console.log("Não foi possível atualizar o Usuario")
        console.log(" ");
        console.log(" ");
      })
      console.log("------------Fim Atualizar Usuario-------------");



    },
    definirHabito() {
      this.user[0].habitos.push({
        titulo: this.nomeHabito,
        xp: 100,
        rotinaSemanal: [],
      });
      let tam = this.user[0].habitos.lenght;
      console.log(this.user[0].habitos);

      // this.user[0].habitos[tam - 1].rotinaSemanal.push(this.rotinaSemanal); //TA BUGANDO
      this.diaTemp = "";
      this.horaTemp = "";
      this.minutoTemp = "";

     /* console.log("------------Inicio Reiniciar Usuario-------------");
      AsyncStorage.clear().then(()=>{
        console.log(" ");
        console.log(" ");
        console.log("Usuario: "+this.salvarUsuario);
        console.log(" ");
        console.log(" ");
        console.log("Usuário Reiniciado");
      })
      .catch(()=>{
        console.log(" ");
        console.log(" ");
        console.log("Não foi possível atualizar o Usuario")
        console.log(" ");
        console.log(" ");
      })
      console.log("------------Fim Reiniciar Usuario-------------");*/

      this.navigation.navigate("AndroidTabs");
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
  right: 20px;
  bottom: 30px;
  width: 100%;
  height: 80px;
  align-items: center;
  justify-content: center;
  background-color: #386641;
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
  margin-top: 22;
}

.centered-view3 {
  background-color: rgba(0, 0, 0, 0.8);
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 22;
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

.box-horario {
  margin-top: 20px;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
</style>