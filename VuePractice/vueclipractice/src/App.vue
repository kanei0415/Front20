<template>
  <div id="app">
    <Header></Header>
    <Input></Input>
    <List></List>
    <Footer></Footer>
  </div>
</template>

<script>

import Header from './components/Header.vue'
import Input from './components/Input.vue'
import List from './components/List.vue'
import Footer from './components/Footer.vue'

export default {
  components : {
    'Header' : Header,
    'Input' : Input,
    'List' : List,
    'Footer' : Footer,
  }
}
</script>

<style>
body{
  text-align: center;
  background-color: #F6F6F8;
}

input{
  border-style: groove;
  width: 200px;
}

button{
  border-style: groove;
}

.shadow{
  box-shadow: 5px 10x 10px rgba(0,0,0,0.03);
}
</style>
