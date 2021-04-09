//전역 컴포넌트
var vm = null;

$(document).ready(function() {

    Vue.component('todo-component', {


        template: '<div>'+
        '<div>{{id}} {{todo}} {{done}}</div>'+
        '<div v-else><input type="text"><input type="text"><input type="text"></div>'+
        '<button v-on:click="delTodo()">삭제</button></div>',

        props: ['id', 'todo', 'done'],

        data: {
            id:'',
            todo:'',
            done:''
        },
        methods: {
            delTodo: function() {
                alert("삭제!(todo-component)");
                alert("삭제할 정보(todo-component)"+this.id);
                vm.delTodo(this.id);
            },

        }
    });

    vm = new Vue({

        el: '#app',
        data: {
            name: '',
            age: '',
            height: '',
            todoList:[
              {id:1,todo:'공부하기',done:false},
              {id:2,todo:'운동하기',done:false},
              {id:3,todo:'요리하기',done:false},
            ]
        },

        methods: {
            addTodo: function() {
                alert("추가!(vm)");

            },
            delTodo: function(id) {
                alert("삭제!(vm)");
                alert("삭제할 정보(vm)"+id);
            },
        }
    })

})
