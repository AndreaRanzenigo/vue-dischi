const app = new Vue( {
    el: '#app',
    data: {
       activeGenre: 'all',
       listCds: []
    },
    created () {
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
        .then( response => {
            console.log(response.data);
            this.listCds = response.data.response;
        })
        .catch( error => {
            console.log(error);
        });
    },
    methods: {
        filterGenre() {
            axios.get('https://flynn.boolean.careers/exercises/api/array/music')
            .then( response => {
                let filterCds = response.data.response;
                
                if(this.activeGenre !== 'all') {
                    filterCds = filterCds.filter( cd => cd.genre.toLowerCase() === this.activeGenre);
                }

                this.listCds = filterCds;
            })
            .catch( error => {
                console.log(error);
            });
        }
    } 
});