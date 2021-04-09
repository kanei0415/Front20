<template>
  <div id="app">
    <ol>
    <li v-for="todo in todos">
      {{todo.text}}
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
        { text: 'HTML+CSS 배우기' },
        { text: 'JavaScript 배우기' },
        { text: 'Vue 배우기' }
      ]
    }
  },

  methods: {
    fetchData() {
      axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => {

      console.log(res.data);

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
