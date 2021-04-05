$(document).ready(function(){


    var vm=new Vue({

      el: "#app",
      data: {
        output: "food"
      },
      methods: {
        readRefs: function() {
          this.output = this.$refs.input.value;
        }
      }

    })

})
