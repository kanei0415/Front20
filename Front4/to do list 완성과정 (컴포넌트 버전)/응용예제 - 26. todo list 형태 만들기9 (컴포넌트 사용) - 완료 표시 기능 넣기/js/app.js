//전역 컴포넌트
var vm = null;

$(document).ready(function() {

    Vue.component('todo-component', {

        template: '<div id="todo-comp" v-bind:class="checked()">{{id}} {{todo}}' +
            '<button v-on:click="doneTodo()">진행중</button>' +
            '<button v-on:click="delTodo()">삭제</button></div>',

        props: ['id', 'todo', 'done'],

        data: function() {
            return {
                id: '',
                todo: '',
                done: '',
            }
        },

        mounted() {

        },
        methods: {
            delTodo: function() {
                alert('삭제!(todo-component)' + this.id);
                vm.delTodo(this.id);
            },
            doneTodo: function() {
                //alert('todo 상태 변경!');
                //alert('변경전'+this.done);
                //this.done=!this.done;
                //alert('변경후'+this.done);
                vm.doneTodo(this.id);
                //document.getElementById("todo-comp").getElementsByTagName('button').firstChild.innerText = '완료';

                if (this.done == true) {

                }

            },
            checked: function() {
                return { checked: this.done };

            }
        }
    });

    vm = new Vue({

        el: '#app',
        data: {
            id: '',
            todo: '',
            done: false,
            todoList: [
                { id: 1, todo: '공부하기', done: false },
                { id: 2, todo: '운동하기', done: false },
                { id: 3, todo: '요리하기', done: false },
            ]
        },

        methods: {
            addTodo: function() {
                this.id = this.todoList.length + 1;
                alert("추가!(vm)");
                this.todoList.push({ id: this.id, todo: this.todo, done: this.done });
            },
            delTodo: function(id) {
                alert("삭제!(vm)" + id);

                var index = this.todoList.findIndex(function(item) {
                    return item.id === id;
                })
                this.todoList.splice(index, 1);
            },
            doneTodo: function(id) {
                var index = this.todoList.findIndex(function(item) {
                    return item.id === id;
                })

                this.todoList[index].done = !this.todoList[index].done;
            }

        }
    })

})