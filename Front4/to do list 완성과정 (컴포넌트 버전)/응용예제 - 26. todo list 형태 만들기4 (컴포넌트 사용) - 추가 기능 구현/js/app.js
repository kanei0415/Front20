//전역 컴포넌트
var vm = null;

$(document).ready(function() {

    Vue.component('todo-component', {


        template:
        '<div>{{id}} {{todo}} {{done}}'+
        '<button>삭제</button></div>',

        props: ['id', 'todo', 'done'],

        data: {
            id:'',
            todo:'',
            done:''
        },
        methods: {

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

        }
    })

})
