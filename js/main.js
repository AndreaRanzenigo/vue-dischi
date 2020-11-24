const app = new Vue( {
    el: '#app',
    data: {
       activecd: '',
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
        
    } 
});