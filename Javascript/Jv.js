//Svolgimento

const { createApp } = Vue;

createApp({

    data() {

        return {

            activeAvatar: 0,

            activeMessage: 0,

            message: "",

            searchmex: "",

            contacts: [
                {
                    name: 'Vercy',
                    avatar: 'img-recap/avatar-esempi/avatar2.jpeg',
                    index: 0,
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
                    index: 1,
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
                },
                {
                    name: 'Str Lincoln',
                    avatar: 'img-recap/avatar-esempi/avatar4.jpg',
                    index: 2,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Davvero volete abbandonare questo film? Ma che razza impossibile!!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'A chi razza impossibile?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Nella mia fattoria coltivo piombo!',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Io non leggo il copione, il copione legge me!',
                            status: 'received'
                        },
                    ],
                },
                {
                    name: 'Olmo',
                    avatar: 'img-recap/avatar-esempi/avatar3.jpg',
                    index: 3,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'tua...tu tuaa... patatina mia',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: '(coro)shattuia',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'non titillare la mia fantasia',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Allora tu',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: '(coro)tu tua',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'rucolina mia la notte è buia, no, non andare via.',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: "Com'è bello il nostro amore, senti come sale,è bello solo se ci sei tuaaa, sotto questa luna dimmi cosa pensi di me.",
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Che sei una merda, io credo veramente tu sei merda.',
                            status: 'sent'
                        },
                    ],
                }
            ],
 
        }
    },

    //ricerca utente
    computed: {

        filteredList() {
        
        //quando avvio la pagina carica tutti i nomi con i vari indici poiche il tag input search è vuoto e non filtra nulla: restituisce un array con tutti i dati filtrati
        const result = this.contacts.filter(user => {
            
            //console.log(user.name.toLowerCase().includes(this.searchmex.toLowerCase()));

            //faccio la ricerca per nome
            return user.name.toLowerCase().includes(this.searchmex.toLowerCase())

          })

        return result;
          
        }
      },

    //metodi
    methods: {
        
        changeCon(index){

            this.activeAvatar = index;
        },


        //acquisisco la data corrente
        getDate(){

           let dateC  =new Date();

            //restituisce l'anno corrente
            let year = dateC.getFullYear();

            //restituisce mese corrente da 0 a 11 e quindi si aggiunge 1
            let month = dateC.getMonth()+1;

            //restituisce giorno corrente
            let day = dateC.getDate();

            //restituisce ora corrente
            let hour = dateC.getHours();

            //restituisce minuti correnti
            let minute = dateC.getMinutes();

            //restituisce secondi correnti
            let second = dateC.getSeconds();

            //creo un'unica stringa concatenata con tutte le informazioni di mio interesse
            let time = day+'/'+month+'/'+year+' '+hour+':'+minute+':'+second;

            //restituisco tale stringa
            return time;


        },

        //aggiunta nuovo messaggio
        addMessage() {

            //acquisisco la data dalla funzione getDate all'interno di una variabile locale
            let dateC = this.getDate();

            //creo un'altra variabile : oggetto, con il testo scelto dall'utente
            taskN = {date:dateC,message:this.message,status:'sent'};

            //inserisco tale variabile nel mio array
            this.contacts[this.activeAvatar].messages.push(taskN);

            console.log(this.contacts[this.activeAvatar].messages);

        },

     
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
  }

}).mount('#app');