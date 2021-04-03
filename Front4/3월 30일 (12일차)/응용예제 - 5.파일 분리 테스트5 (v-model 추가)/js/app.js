$(document).ready(function(){

    
    var vm=new Vue({

    el:'#app',
    data:{
        message:'Hello Vue JS!'
    },
    methods:{
        hello:function(){
            alert("Hello Vue JS!");
        },
        change:function(){
           this.message="Bye Vue JS!"
        }
    }

    })

})
