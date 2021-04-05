$(document).ready(function(){

    
    var vm=new Vue({

    el:'#app',
    data:{
        radioVal:''
    },
    methods:{
        choice:function(){
            alert(this.radioVal);
        }
    }

    })

})
