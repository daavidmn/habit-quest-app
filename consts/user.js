export const constUser = [
  {
    nome: 'Zé Monstrão',
    xpTotal: '1500',
    habitos: [
      {
        titulo: 'Corrida com cachorro',
        xp: 100,
        rotinaSemanal: [
          { //baseado em objetos tipo Date
            diaSetado: 1, //getDay()     
            horaSetada: 10, //getHour()
            minutoSetado: 15, //getMinute()
            notificar: true,
            completado: false,
          },
        ],
      },
      {
        titulo: 'Futebol',
        xp: 100,
        rotinaSemanal: [
          { //baseado em objetos tipo Date
            diaSetado: 3, //getDay()     
            horaSetada: 13, //getHour()
            minutoSetado: 18, //getMinute()
            notificar: true,
            completado: false,
          },
        ],
      }
    ],
  }
]