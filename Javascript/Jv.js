


//Svolgimento

const { createApp } = Vue;

createApp({

    data() {

        return {

            activeAvatar: 0,

            activeMessage: 0,

            contacts: [
                {
                    name: 'Vercy',
                    avatar: 'img-recap/avatar-esempi/avatar2.jpeg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message:'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di scacciare i Burgundi e dare una mano ogni tanto agli Edui.....',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Fai attenzione anche ai romani',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di innaffiare le piante ogni tanto.....',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto come prima =)',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Jack',
                    avatar: 'img-recap/avatar-esempi/avatar5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Troppa gente, qui dentro, è stata abbattuta come mosche.',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'E cosa hai ottenuto?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Dimmelo tu!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Niente, e subito anche.',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Aahhh. Lo sai cosa dice il vecchio Jack Burton in situazioni come questa?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Chi?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Jack Burton, qui presente! Il vecchio Jack dice sempre… Basta adesso!',
                            status: 'received'
                        }
                    ],
                }
            ]
            
        }
    },
    methods: {
        
        changeCon(index){
            console.log(this.activeAvatar);

            this.activeAvatar = index;

        }
    },

    mounted() {

    //   for(let i = 0; i < 10;i++){
 
    //      //chiamata tramite libreria axios all'Api ()
    //      axios.get("https://flynn.boolean.careers/exercises/api/random/mail")

    //         .then((risposta) => {

    //            console.log(risposta.data.response);

    //            this.Arraymails.push(risposta.data.response);

    //            console.log(this.Arraymails);

    //            if(i== 9){
    //                 this.complete = true;
    //            }

    //         });

    //   }
;
  }

}).mount('#app');