<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" placeholder="Type what you have to do"
    @keyup.enter="addToDo">
    <span class="addContainer" @click="addToDo">
      <span class="addBtn fa fa-plus" aria-hidden="true"></span>
    </span>
  </div>
</template>

<script>
export default{
  data(){
    return{
      newTodoItem : ''
    }
  },
  methods : {
    addToDo(){
      if(this.newTodoItem !== "") {
        let value = this.newTodoItem && this.newTodoItem.trim();
        localStorage.setItem(value, value);
        this.clearInput();
      }
    },

    clearInput(){
      this.newTodoItem = '';
    }
  }
}
</script>

<style>
  input:focus{
    outline: none;
  }

  .inputBox{
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }

  .inputBox input{
    border-style: none;
    font-size : 0.9rem;
  }

  .addContainer{
    float: left;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: inline-block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
  }

  .addBtn{
    color: white;
    vertical-align: middle;
  }
</style>