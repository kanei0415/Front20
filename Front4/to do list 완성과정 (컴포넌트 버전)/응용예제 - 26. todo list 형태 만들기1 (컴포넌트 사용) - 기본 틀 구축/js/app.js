//전역 컴포넌트

$(document).ready(function() {

    Vue.component('todo-component', {
        template: '<div>todo 컴포넌트' +
            '<button>삭제</button></div>',

        data: {
            //
        },
        methods: {
            //삭제
        }
    });

    var vm = new Vue({

        el: '#app',
        data: {
            //JSON배열 (id,todo,done)
        },
        methods: {
            //삭제
        }
    })
})