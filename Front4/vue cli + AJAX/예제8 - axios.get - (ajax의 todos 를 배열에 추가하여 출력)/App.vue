<template>
  <div id="app">
    <ol>
    <li v-for="todo in todos">
      {{todo.Id}}
      {{todo.userId}}
      {{todo.title}}
    </li>
  </ol>
  </div>
</template>

<script>
import axios from "axios";

export default {
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
