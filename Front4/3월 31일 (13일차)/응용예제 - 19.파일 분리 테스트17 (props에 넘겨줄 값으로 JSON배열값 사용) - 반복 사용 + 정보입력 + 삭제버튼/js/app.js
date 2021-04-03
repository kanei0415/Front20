//전역 컴포넌트
var vm = null;

$(document).ready(function() {

    Vue.component('person-component', {
        template: '<div>{{name}} {{age}} {{height}} <button v-on:click="delInfo()">삭제</button></div>',

        props: ['name', 'age', 'height'],

        data: {

        },
        methods: {
            delInfo: function() {
                alert("삭제!(person-component)");
                vm.delInfo();
            }
        }
    });

    vm = new Vue({

        el: '#app',
        data: {
            name: '',
            age: '',
            height: '',
            personList: [
                { name: "이민호", age: 20, height: 176.6 },
                { name: "정채연", age: 21, height: 165.2 },
                { name: "송중기", age: 22, height: 178.3 }
            ]
        },

        methods: {
            addInfo: function() {
                alert("추가!");
                var person_obj = new Object();
                person_obj.name = this.name;
                person_obj.age = this.age;
                person_obj.height = this.height;

                this.personList.push(person_obj);
                this.name = '';
                this.age = '';
                this.height = '';
            },
            delInfo: function() {
                alert("삭제!(vm)");
            }
        }

    })

})