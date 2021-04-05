$(document).ready(function(){

    var vm=new Vue({

    el:'#app',
    data:{
        message:'Hello Vue JS!'
    },
    methods:{
        choice:function(){
            var btn=document.getElementsByName("radioBtn");
            for(var i=0; i<btn.length; i++)
            {
                alert(btn[i].checked);
            }
        }
    }

    })

})
