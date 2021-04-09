//전역 컴포넌트
var vm = null;

$(document).ready(function() {

    Vue.component('todo-component', {


        template:
        '<div>{{id}} {{todo}} {{done}}'+
        '<button>삭제</button></div>',

        props:['id','todo','done'],
        
        data: {
          
        },
        methods: {

        }
    });

    vm = new Vue({

        el: '#app',
        data: {

        },

        methods: {

        }
    })

})
