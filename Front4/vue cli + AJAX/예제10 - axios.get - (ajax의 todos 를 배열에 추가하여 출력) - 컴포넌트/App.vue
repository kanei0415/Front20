<template>
  <div id="app">
    <ol>
    <todo></todo>
    <todo></todo>
    <todo></todo>
  </ol>
  </div>
</template>

<script>
import axios from "axios";
import "./assets/style.css";
import todo from "./components/todo.vue";

export default {

  components: {
        todo
  },

  name: '#app',
  data()  {
    return {
      todos:[

      ]
    }
  },

  methods: {
    fetchData() {
      axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => {
      this.todos.push(res.data[0]);
      this.todos.push(res.data[1]);
      this.todos.push(res.data[2]);
      })
        .catch(err => {
          console.log(err);
        });
    }
  },

  created() {
    this.fetchData();
  }

}
</script>
