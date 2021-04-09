$(document).ready(function(){

    var vm=new Vue({

    el:'#app',
    data:{
        message:'Hello Vue JS!'
    },
    methods:{
        setText:function(){
            var spn=document.getElementById("txt");
            spn.innerText='스팬';
        }
    }

    })

})
