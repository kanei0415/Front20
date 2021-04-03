$(document).ready(function() {

    var vm = new Vue({

        el: '#app',
        data: {
            name: '',
            namelist: ['정채연']
        },
        methods: {
            addName: function() {
                alert("추가!");
                this.namelist.push(this.name);
            }
        }

    })

})