$(document).ready(function(){

    
    var vm=new Vue({

    el:'#app',
    data:{
        message:'Hello Vue JS!'
    },
    watch:{
        message:function(){
           console.log("message가 변경되었습니다!");
        }
    }
        
    })

})
