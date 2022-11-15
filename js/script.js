new Vue ({
    el : '#app',
    data : {
        arrList: [
        {
            testo: 'Annaffiare i fiori',
            bool : true,
        },
        {
            testo: 'Fare la lavatrice',
            bool : false,
        },
        {
            testo: 'Fare i compiti',
            bool : true,
        },
        {
            testo: 'Fare la spesa',
            bool : false,
        },
    ], 
    
    newTask: '', 
        
    },

    methods : {
        aggiungiTask(){
            if (this.newTask){
                this.arrList.push({
                    testo: this.newTask, 
                    bool : this.newTask,
                })
                this.newTask = ''
            } 
        },
        eliminaTask(index){
            this.arrList.splice(index , 1)
        }
    }

})