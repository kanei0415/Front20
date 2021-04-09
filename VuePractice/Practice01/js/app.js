$(document).ready(function() {

  Vue.component('work-component', {
      props: ['id', 'name', 'done'],

      methods : {
          deleteThis : function () {
              App.deletePerson(this.id)
          },

          setDoneThis : function () {
              this.done = !this.done
              App.setDone(this.id)
          }
      },

      mounted : {
        document.getElementById('doneBtn').setAttr('id', 'doneBtn' + this.id)
      },

      template: "<div>\
      <span v-bind:class={lineThrough:this.done}>{{name}}</span>\
      <button ref='doneBtn'  v-on:click='setDoneThis(id)'>done</button>\
      <button v-on:click='deleteThis(id)'>delete</button>\
      </div>",
  });

  let App = new Vue({

      el: '#app',
      data: {
          idCounter: 3,
          name: '',
          done: false,
          workList: [
              { id: 1, name: "Work1", done: false },
              { id: 2, name: "Work2", done: false },
              { id: 3, name: "Work3", done: false }
          ]
      },

      methods: {
          addPerson: function() {
              this.workList.push({
                id: ++this.idCounter,
                name: this.name,
                done: false
              });
              this.name = ''
              this.done = false;
          },

          deletePerson: function (id) {
            this.workList = this.workList.filter(
                work => work.id != id
            )
          },

          setDone: function (id) {
            let index = this.workList.findIndex(
                work => work.id == id
            );

            if(index != -1) {
                this.workList[index].done = !this.workList[index].done

                let btn = document.getElementById('doneBtn' + this.workList[index].id)

                // if (this.workList[index].done) {
                //   btn.innerText = 'done'
                // } else {
                //   btn.innerText = 'doing'
                // }
            }
          }
      }

  })

})
