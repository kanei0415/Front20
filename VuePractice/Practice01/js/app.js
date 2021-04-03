$(document).ready(function() {

  Vue.component('work-component', {
      props: ['name', 'done'],

      methods : {
          deleteThis : function () { 
              App.deletePerson(this.name)
          },

          setDoneThis : function () {
              this.done = !this.done
              App.setDone(this.name)
          }
      },

      template: "<div>\
      <span v-bind:class={lineThrough:this.done}>{{name}}</span>\
      <button  v-on:click='setDoneThis(name)'>done</button>\
      <button v-on:click='deleteThis(name)'>delete</button>\
      </div>",
  });

  let App = new Vue({

      el: '#app',
      data: {
          name: '',
          done: false,
          workList: [
              { name: "Work1", done: false },
              { name: "Work2", done: false },
              { name: "Work3", done: false }
          ]
      },

      methods: {
          addPerson: function() {
              this.workList.push({
                name: this.name,
                done: false
              });
              this.name = ''
              this.done = false;
          },

          deletePerson: function (name) {  
            this.workList = this.workList.filter(
                work => work.name != name
            )
          },

          setDone: function (name) {
            let index = this.workList.findIndex(
                work => work.name == name
            );

            if(index != -1) {
                this.workList[index].done = !this.workList[index].done
            }
          }
      }

  })

})