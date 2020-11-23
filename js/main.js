//Generare 10 email e stamparle a schermo utilizzando Vue, Axios e il seguente API endpoint boolean:

const app = new Vue ({
  el: "#app",
    data: {
    mails: ''
  },
  created(){  
    const self = this; //Imposto la costante per non far cambiare il valore a this

    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then(function (response) { 
      //Verifica
      console.log(response.data);

      self.mails = response.data.response; 

      })
      .catch(function (error) {
      console.log('Mail', error);
      });

  },
  methods: {

    // printMail() {
    //   const self = this; //Imposto la costante per non far cambiare il valore a this

    // axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    //   .then(function (response) { 
    //   //Verifica
    //   console.log(response.data);

    //   self.mail = response.data.response; 
    //   })
    //   .catch(function (error) {
    //   console.log('Mail', error);
    //   });
    // }
  }
});









// const hei = new Vue({
//   el: "#hei",
//   data: {
//     computerNumber: 0,
//     playerNumber: 0
//   },
//   computed: {
//     dataOk() {
//       return (this.computerNumber !== 0 && this.playerNumber !== 0) ? true : false;
//     },
//     gameResult() {
//       if (this.computerNumber === this.playerNumber) {
//         return 'Pareggio';
//       }
//       return this.computerNumber > this.playerNumber ? 'PC' : 'Player';
//     }
//   },
//   created() {
//     const self = this;
//     //Chimamata AJAX numero random PC
//     axios.get('https://flynn.boolean.careers/exercises/api/random/int')
//     .then(function (response) { 
//       console.log(response.data);

//       self.computerNumber = response.data.response;
//     })
//     .catch(function (error) {
//       console.log(error);
//     });

//     //Chimamata AJAX numero random PLAYER
//     axios.get('https://flynn.boolean.careers/exercises/api/random/int')
//     .then(function (response) { 
//       console.log(response.data);

//       self.playerNumber = response.data.response;
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
//   },
// });