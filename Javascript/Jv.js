//Svolgimento

const { createApp } = Vue;

createApp({

    data() {

        return {

            activeAvatar: 0,

            message: "",

            searchmex: "",

            rispMex: "",

            num: '',

            imgC: "BoxImg",

            contacts: [
                {
                    name: 'Vercy',
                    avatar: 'img-recap/avatar-esempi/avatar2.jpeg',
                    index: 0,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            img: '',
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di scacciare i Burgundi e dare una mano ogni tanto agli Edui.....',
                            status: 'sent',
                            img: '',
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received',
                            img: '',
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Fai attenzione anche ai romani',
                            status: 'sent',
                            img: '',
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di innaffiare le piante ogni tanto.....',
                            status: 'sent',
                            img: '',
                        },
                        {
                            date: '10/09/2020 16:02:22',
                            message: 'Tutto fatto come prima =)',
                            status: 'received',
                            img: '',
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
                            status: 'received',
                            img: '',
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'E cosa hai ottenuto?',
                            status: 'received',
                            img: '',
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Dimmelo tu!',
                            status: 'sent',
                            img: '',
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Niente, e subito anche.',
                            status: 'received',
                            img: '',
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Aahhh. Lo sai cosa dice il vecchio Jack Burton in situazioni come questa?',
                            status: 'received',
                            img: '',
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Chi?',
                            status: 'sent',
                            img: '',
                        },
                        {
                            date: '10/11/2020 15:50:00',
                            message: 'Jack Burton, qui presente! Il vecchio Jack dice sempre… Basta adesso!',
                            status: 'received',
                            img: '',
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
                            status: 'sent',
                            img: '',
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'A chi razza impossibile?',
                            status: 'received',
                            img: '',
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Nella mia fattoria coltivo piombo!',
                            status: 'received',
                            img: '',
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Io non leggo il copione, il copione legge me!',
                            status: 'received',
                            img: '',
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
                            status: 'received',
                            img: '',
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: '(coro)shattuia',
                            status: 'sent',
                            img: '',
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'non titillare la mia fantasia',
                            status: 'received',
                            img: '',
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Allora tu',
                            status: 'received',
                            img: '',
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: '(coro)tu tua',
                            status: 'sent',
                            img: '',
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'rucolina mia la notte è buia, no, non andare via.',
                            status: 'received',
                            img: '',
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: "Com'è bello il nostro amore, senti come sale,è bello solo se ci sei tuaaa, sotto questa luna dimmi cosa pensi di me.",
                            status: 'received',
                            img: '',
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Che sei una merda, io credo veramente tu sei merda.',
                            status: 'sent',
                            img: '',
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

        connectApi() {

            if (this.contacts[this.activeAvatar].index == 0) {

                //chiamata tramite libreria axios all'Api che genera immagini random di cani ()
                axios.get("https://dog.ceo/api/breeds/image/random")

                    .then((risposta) => {

                        this.rispMex = risposta.data.message;

                        //acquisisco la data dalla funzione getDate all'interno di una variabile locale
                        let dateC = this.getDate();

                        //creo un'altra variabile : oggetto, con il testo scelto dall'utente
                        taskN = { date: dateC, message: 'che ne pensi?', status: 'received', img: this.rispMex };

                        //inserisco tale variabile nel mio array
                        this.contacts[this.activeAvatar].messages.push(taskN);

                    });

            }

            else if (this.contacts[this.activeAvatar].index == 3) {

                //chiamata tramite libreria axios all'Api che genera immagini random di cani ()
                axios.get("https://api.nationalize.io?name=" + this.message)

                    .then((risposta) => {


                        this.rispMex = "Nazionalità: " + risposta.data.country[0].country_id + " con probabilità dello :" + risposta.data.country[0].probability + "%";

                        //acquisisco la data dalla funzione getDate all'interno di una variabile locale
                        let dateC = this.getDate();

                        //creo un'altra variabile : oggetto, con il testo scelto dall'utente
                        taskN = { date: dateC, message: this.rispMex, status: 'received' };

                        //inserisco tale variabile nel mio array
                        this.contacts[this.activeAvatar].messages.push(taskN);

                    });

            }

        },

        returnStart() {
            this.searchmex = '';
        },

        changeCon(index) {

            this.activeAvatar = index;
        },


        //acquisisco la data corrente
        getDate() {

            let dateC = new Date();

            //restituisce l'anno corrente
            let year = dateC.getFullYear();

            //restituisce mese corrente da 0 a 11 e quindi si aggiunge 1
            let month = dateC.getMonth() + 1;

            //restituisce giorno corrente
            let day = dateC.getDate();

            //restituisce ora corrente
            let hour = dateC.getHours();

            //aggiungo zero all'ora
            if (0 <= hour && hour <= 9) {

                hour = '0' + hour;
            }

            //restituisce minuti correnti
            let minute = dateC.getMinutes();

            //aggiungo zero ai minuti
            if (0 <= minute && minute <= 9) {

                minute = '0' + minute;
            }

            //restituisce secondi correnti
            let second = dateC.getSeconds();

            //creo un'unica stringa concatenata con tutte le informazioni di mio interesse
            let time = day + '/' + month + '/' + year + ' ' + hour + ':' + minute + ':' + second;

            //restituisco tale stringa
            return time;


        },

        //aggiunta nuovo messaggio
        addMessage() {

            //controllo se il corpo del messaggio è vuoto
            if (this.message.length === 0) {

                return alert("il corpo del messaggio è vuoto");

            }

            //acquisisco la data dalla funzione getDate all'interno di una variabile locale
            let dateC = this.getDate();

            //creo un'altra variabile : oggetto, con il testo scelto dall'utente
            taskN = { date: dateC, message: this.message, status: 'sent', img: '' };

            //inserisco tale variabile nel mio array
            this.contacts[this.activeAvatar].messages.push(taskN);

            //richiama funzipon per connessione api
            this.connectApi();

            //avvio lo sroll della pagina dopo tot tempo per dare modo di caricare in pagina i nuovi dati
            setTimeout(this.scrollToElement, 250);


        },

        //cliccando su un messagio compare il menu
        ShowdropMenu(index) {

            //attivo menu se il valore è null
            if (this.num === '') {

                this.num = index;

            }
            //altrimenti
            else {

                this.num = '';
            }

        },


        //cancellazione effettiva del messaggio
        DelMessage(index) {

            //rimuovo messaggio in modo dinamico
            this.contacts[this.activeAvatar].messages.splice(index, 1);

        },

        //scroll verticale
        scrollToElement() {

            const element = document.querySelectorAll(".boxC");

            //acquisisco l'ultimo messaggio in pagina
            const prova = element[element.length - 1];

            if (prova) {

                prova.scrollIntoView({ behavior: "smooth", block: "end", inline: "end" });

            }

        }

    },

    mounted() {
    }

}).mount('#app');