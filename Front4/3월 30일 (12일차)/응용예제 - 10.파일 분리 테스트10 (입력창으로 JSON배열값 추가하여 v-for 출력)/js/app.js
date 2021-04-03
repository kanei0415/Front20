$(document).ready(function() {

    var vm = new Vue({

        el: '#app',
        data: {
            name: '',
            age: '',
            height: '',
            personlist: [

            ]
        },
        methods: {
            addName: function() {
                alert("추가!");
                var person_obj = new Object();
                person_obj.name = this.name;
                person_obj.age = this.age;
                person_obj.height = this.height;

                this.personlist.push(person_obj);
                this.name = '';
                this.age = '';
                this.height = '';
            }
        }

    })

})