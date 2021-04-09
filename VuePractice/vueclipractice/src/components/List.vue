<template>
  <section>
    <ul>
      <li :key="index" v-for="(todoItem, index) in todoItems" class="shadow">
        <span class="checkBtn fa fa-check" aria-hidden="true"></span>
        {{todoItem}}
        <span class="removeBtn" type="button" @click="removeTodo(todoItem, index)">
          <span class="fa fa-trash-o" aria-hidden="true"></span>
        </span>
      </li>
    </ul>
  </section>
</template>

<script>
export default{
  data(){
    return{
      todoItems : []
    }
  },

  created(){
    if(localStorage.length > 0) {
      for (data of localStorage)
      this.todoItems.push(data);
    }
  },

  methods : {
    removeTodo(todoItem, index){
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index,1);
    }
  }
}
</script>

<style>
  ul{
    list-style: none;
    padding-left: 0;
    margin-top: 0;
    text-align: left;
  }

  li{
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
  }

  .checkBtn{
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
  }

  .removeBtn{
    margin-left: auto;
    color: #de4343;
  }
</style>